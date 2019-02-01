import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CurrentbookmarksService } from '../currentbookmarks.service';
import { HttpClient } from '@angular/common/http';
import { UsernameService } from '../username.service';
var MainComponent = /** @class */ (function () {
    function MainComponent(bookmarkservice, http, usernameservice) {
        var _this = this;
        this.bookmarkservice = bookmarkservice;
        this.http = http;
        this.usernameservice = usernameservice;
        this.username = "NewUser";
        this.noOfBookmarks = 0;
        this.showLoginDetails();
        this.bookmarkservice.getBookmark().subscribe(function (bookmark) { return _this.noOfBookmarks = bookmark.length; });
        this.http.get('http://localhost:8000/user/getActiveUser', { responseType: 'text' })
            .subscribe(function (response) {
            if (response != 'No Active User') {
                _this.hideLoginDetails();
                _this.username = response;
                _this.usernameservice.broadcastUsername(_this.username);
            }
        });
    }
    MainComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.showLoginDetails = function () {
        this.loginVisibility = true;
    };
    MainComponent.prototype.hideLoginDetails = function () {
        this.loginVisibility = false;
    };
    MainComponent.prototype.sendAuth = function (username, password) {
        var _this = this;
        this.http.post('http://localhost:8000/user/auth', { "name": username, "pass": password }, { responseType: 'text' })
            .subscribe(function (response) {
            console.log(response);
            if (response == 'Yes') {
                _this.hideLoginDetails();
                _this.username = username;
                _this.usernameservice.broadcastUsername(_this.username);
                _this.http.post('http://localhost:8000/user/activateUser', { "name": username })
                    .subscribe(function (response) {
                    console.log(response);
                });
            }
        }, function (err) { return console.log(err); });
    };
    MainComponent.prototype.addUser = function (username, password) {
        var _this = this;
        var userExist;
        userExist = 'true';
        this.http.post('http://localhost:8000/user/doesUserExist', { "name": username }, { responseType: 'text' })
            .subscribe(function (response) {
            console.log('Response ' + response);
            if (response == 'No')
                userExist = 'false';
            else
                userExist = 'true';
            if (userExist == 'false') {
                console.log('enteredss');
                _this.http.post('http://localhost:8000/user/addUser', { "name": username, "pass": password, "status": 'active' }, { responseType: 'text' })
                    .subscribe(function (response) {
                    if (response == 'User added') {
                        _this.hideLoginDetails();
                        _this.username = username;
                        _this.usernameservice.broadcastUsername(_this.username);
                    }
                });
            }
        });
    };
    MainComponent.prototype.logUserOut = function () {
        console.log('entered');
        this.http.post('http://localhost:8000/user/logUserOut', { "name": this.username })
            .subscribe(function (user) {
            console.log(user);
        });
        this.username = "NewUser";
        this.showLoginDetails();
    };
    MainComponent = tslib_1.__decorate([
        Component({
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CurrentbookmarksService, HttpClient, UsernameService])
    ], MainComponent);
    return MainComponent;
}());
export { MainComponent };
//# sourceMappingURL=main.component.js.map