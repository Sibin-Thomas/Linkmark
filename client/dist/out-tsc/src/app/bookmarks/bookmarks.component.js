import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CurrentbookmarksService } from '../currentbookmarks.service';
import { Bookmark } from '../bookmark';
import { UsernameService } from "../username.service";
import { HttpClient } from '@angular/common/http';
var BookmarksComponent = /** @class */ (function () {
    function BookmarksComponent(http, bookmarkservice, usernameservice) {
        var _this = this;
        this.http = http;
        this.bookmarkservice = bookmarkservice;
        this.usernameservice = usernameservice;
        this.bookmarks = [];
        this.usernameservice.getUsername().subscribe(function (username) {
            _this.currentUser = username;
            _this.http.post('http://localhost:8000/bookmark/showBookmark', { 'user': username })
                .subscribe(function (response) {
                for (var i; i < response.length; i++) {
                    _this.bookmarks.push(response[i].bookmarkUrl, response[i].bookmarkName, response[i].username);
                    console.log(response[i].username);
                }
            });
        });
    }
    BookmarksComponent.prototype.addBookmark = function (bookmark) {
        var _this = this;
        var temp = bookmark.split("/")[2];
        this.http.post('http://localhost:8000/bookmark/addBookmark', { "url": bookmark, "name": temp, "user": this.currentUser }, { responseType: 'text' })
            .subscribe(function (response) {
            console.log(response);
            _this.bookmarks.push(new Bookmark(bookmark, temp, _this.currentUser));
            _this.bookmarkservice.sendBookmark(_this.bookmarks);
        });
    };
    BookmarksComponent.prototype.removeBookmark = function (indexOfBookmarkArray) {
        var _this = this;
        this.http.post('http://localhost:8000/bookmark/removeBookmark', { "url": this.bookmarks[indexOfBookmarkArray].bookmarkUrl, "name": this.bookmarks[indexOfBookmarkArray].bookmarkName, "user": this.bookmarks[indexOfBookmarkArray].username }, { responseType: 'text' })
            .subscribe(function (response) {
            console.log(response);
            _this.bookmarks.splice(indexOfBookmarkArray, 1);
            console.log(_this.bookmarks);
        });
    };
    BookmarksComponent.prototype.ngOnInit = function () {
    };
    BookmarksComponent = tslib_1.__decorate([
        Component({
            selector: 'app-bookmarks',
            templateUrl: './bookmarks.component.html',
            styleUrls: ['./bookmarks.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, CurrentbookmarksService, UsernameService])
    ], BookmarksComponent);
    return BookmarksComponent;
}());
export { BookmarksComponent };
//# sourceMappingURL=bookmarks.component.js.map