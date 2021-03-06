"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.onPageLoaded = function () {
        console.log("page 1 page loaded");
    };
    HomePage.prototype.onPageWillEnter = function () {
        console.log("page 1: page will enter");
    };
    HomePage.prototype.onPageDidEnter = function () {
        console.log("page 1: page did enter");
    };
    HomePage.prototype.onPageWillLeave = function () {
        console.log("page 1: page will leave");
    };
    HomePage.prototype.onPageDidLeave = function () {
        console.log("page 1: page did leave");
    };
    HomePage.prototype.onPageWillUnload = function () {
        //从DOM中移除的时候执行的生命周期
    };
    HomePage.prototype.onPageDidUnload = function () {
        //DOM中移除执行完成的时候
    };
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home/home.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
