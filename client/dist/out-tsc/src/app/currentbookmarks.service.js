import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var CurrentbookmarksService = /** @class */ (function () {
    function CurrentbookmarksService() {
        this.subject = new Subject();
    }
    CurrentbookmarksService.prototype.sendBookmark = function (bookmark) {
        this.subject.next(bookmark);
    };
    CurrentbookmarksService.prototype.clearBookmark = function () {
        this.subject.next();
    };
    CurrentbookmarksService.prototype.getBookmark = function () {
        return this.subject.asObservable();
    };
    CurrentbookmarksService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CurrentbookmarksService);
    return CurrentbookmarksService;
}());
export { CurrentbookmarksService };
//# sourceMappingURL=currentbookmarks.service.js.map