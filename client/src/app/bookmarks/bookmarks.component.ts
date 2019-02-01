import { Component, OnInit } from '@angular/core';
import {CurrentbookmarksService} from '../currentbookmarks.service';
import {Bookmark} from '../bookmark';
import {UsernameService} from "../username.service";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
	currentUser:string;
	bookmarks:Bookmark [];
	faltu:string;
	constructor(private http: HttpClient, private bookmarkservice: CurrentbookmarksService, private usernameservice: UsernameService) {
		this.bookmarks = [];
		this.usernameservice.getUsername().subscribe(username => this.currentUser = username);
	}

	addBookmark(bookmark:string){
		var temp = bookmark.split("/")[2];
		this.http.post('http://localhost:8000/bookmark/addBookmark',{"url":bookmark,"name":temp,"user":this.currentUser},{responseType:'text'})
		.subscribe((response)=>{
			console.log(response);
			this.bookmarks.push(new Bookmark(bookmark, temp,  this.currentUser));
			this.bookmarkservice.sendBookmark(this.bookmarks);
		});
	}

	removeBookmark(indexOfBookmarkArray:number){
		this.http.post('http://localhost:8000/bookmark/removeBookmark',{"url":this.bookmarks[indexOfBookmarkArray].bookmarkUrl,"name":this.bookmarks[indexOfBookmarkArray].bookmarkName,"user":this.bookmarks[indexOfBookmarkArray].username},{responseType:'text'})
		.subscribe((response)=>{
			console.log(response);
			this.bookmarks.splice(indexOfBookmarkArray,1);
			console.log(this.bookmarks);
		});
	}

	ngOnInit() {
	}

}
