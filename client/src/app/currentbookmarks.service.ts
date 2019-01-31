import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentbookmarksService {

  private subject = new Subject<string>();
  
  sendBookmark(bookmark:string){
  	this.subject.next(bookmark);
  	console.log('service called');
  }
  
  clearBookmark(){
  	this.subject.next();
  }

  getBookmark():Observable<string>{
  	return this.subject.asObservable();
  }

}
