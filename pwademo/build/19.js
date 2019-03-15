webpackJsonp([19],{

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewTilkPageModule", function() { return PreviewTilkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_tilk__ = __webpack_require__(885);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreviewTilkPageModule = /** @class */ (function () {
    function PreviewTilkPageModule() {
    }
    PreviewTilkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__preview_tilk__["a" /* PreviewTilkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__preview_tilk__["a" /* PreviewTilkPage */]),
            ],
        })
    ], PreviewTilkPageModule);
    return PreviewTilkPageModule;
}());

//# sourceMappingURL=preview-tilk.module.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewTilkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(45);
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
 * Generated class for the PreviewTilkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreviewTilkPage = /** @class */ (function () {
    function PreviewTilkPage(viewCtrl, sanitizer, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PreviewTilkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviewTilkPage');
        this.url = this.navParams.get('preview');
        console.log(this.url);
    };
    PreviewTilkPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PreviewTilkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-preview-tilk',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/preview-tilk/preview-tilk.html"*/'<!--\n  Generated template for the PreviewTilkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Project preview</ion-title>\n    <button  (click)="dismiss()" class="canc-bt">Cancel <ion-icon name="md-close" showWhen="android,windows"></ion-icon></button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   <!-- // {{url}} -->\n   <iframe width="100%" height="100%" src="https://docs.tilkee.io/preview/OTdlMDM2YWE0OA"></iframe> \n  <!-- <iframe  width="100%" height="100%" [src]=\'sanitizer.bypassSecurityTrustResourceUrl(https://docs.tilkee.io/preview/OTdlMDM2YWE0OA)\'></iframe> -->\n</ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/preview-tilk/preview-tilk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], PreviewTilkPage);
    return PreviewTilkPage;
}());

//# sourceMappingURL=preview-tilk.js.map

/***/ })

});
//# sourceMappingURL=19.js.map