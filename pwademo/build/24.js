webpackJsonp([24],{

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTilkeeStartPageModule", function() { return FileTilkeeStartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_tilkee_start__ = __webpack_require__(881);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileTilkeeStartPageModule = /** @class */ (function () {
    function FileTilkeeStartPageModule() {
    }
    FileTilkeeStartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_tilkee_start__["a" /* FileTilkeeStartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_tilkee_start__["a" /* FileTilkeeStartPage */]),
            ],
        })
    ], FileTilkeeStartPageModule);
    return FileTilkeeStartPageModule;
}());

//# sourceMappingURL=file-tilkee-start.module.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTilkeeStartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FileTilkeeStartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileTilkeeStartPage = /** @class */ (function () {
    function FileTilkeeStartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FileTilkeeStartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FileTilkeeStartPage');
    };
    // GOES TO CRETE PROJECT PAGE
    FileTilkeeStartPage.prototype.createproject = function () {
        this.navCtrl.push('create_project');
    };
    // GOES TO READ PROJECT PAGE
    FileTilkeeStartPage.prototype.file_read_status = function () {
        this.navCtrl.push('read_project');
    };
    // GOES TO UNREAD PROJECT PAGE
    FileTilkeeStartPage.prototype.file_not_read_status = function () {
        this.navCtrl.push('unread_project');
    };
    // GOES TO DRAFTED PROJECT
    FileTilkeeStartPage.prototype.drafted_file = function () {
        this.navCtrl.push('drafted_project');
    };
    // GOES TO LISTED PROJECTS
    FileTilkeeStartPage.prototype.listproject = function () {
        this.navCtrl.push('list_projects');
    };
    FileTilkeeStartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-file-tilkee-start',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/file-tilkee-start/file-tilkee-start.html"*/'<!--\n  Generated template for the FileTilkeeStartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Track File</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <div class="file-page-wrapper">\n           \n          </div>\n          <div class="file-in-form-cont">\n            \n            <div class="file-in-bt" (click)="createproject()">\n              Create a new project\n            </div>\n            <div class="file-in-bt_two" (click)="listproject()">\n                List of projects\n              </div>\n            <!-- <div class="file-in-bt_two" (click)="file_read_status()">\n              Track file read \n            </div>\n            <div class="file-in-bt_three" (click)="file_not_read_status()">\n              Track file not read \n            </div>\n            <div class="file-in-bt_four" (click)="drafted_file()">\n              Draft\n            </div> -->\n          \n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button>  -->\n</ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/file-tilkee-start/file-tilkee-start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], FileTilkeeStartPage);
    return FileTilkeeStartPage;
}());

//# sourceMappingURL=file-tilkee-start.js.map

/***/ })

});
//# sourceMappingURL=24.js.map