import { Component, OnInit } from '@angular/core';
import {CurrentbookmarksService} from '../currentbookmarks.service';
import {Bookmark} from '../bookmark';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
	bookmarks:Bookmark [];
	faltu:string;
	constructor(private bookmarkservice: CurrentbookmarksService) {
		this.bookmarks = [];
	}

	addBookmark(bookmark:string){
		this.bookmarkservice.sendBookmark(bookmark);
		var temp = bookmark.split("/")[2];
		console.log(temp);
		this.bookmarks.push(new Bookmark(bookmark,temp,""));
	}

	ngOnInit() {
	}

}
