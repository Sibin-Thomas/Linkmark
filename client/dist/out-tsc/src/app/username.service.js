import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var UsernameService = /** @class */ (function () {
    function UsernameService() {
        this.subject = new Subject();
    }
    UsernameService.prototype.broadcastUsername = function (username) {
        this.subject.next(username);
    };
    UsernameService.prototype.getUsername = function () {
        return this.subject.asObservable();
    };
    UsernameService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], UsernameService);
    return UsernameService;
}());
export { UsernameService };
//# sourceMappingURL=username.service.js.map