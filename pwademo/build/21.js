webpackJsonp([21],{

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTilkPageModule", function() { return ListTilkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_tilk__ = __webpack_require__(884);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListTilkPageModule = /** @class */ (function () {
    function ListTilkPageModule() {
    }
    ListTilkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_tilk__["a" /* ListTilkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_tilk__["a" /* ListTilkPage */]),
            ],
        })
    ], ListTilkPageModule);
    return ListTilkPageModule;
}());

//# sourceMappingURL=list-tilk.module.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListTilkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__ = __webpack_require__(19);
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
 * Generated class for the ListTilkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListTilkPage = /** @class */ (function () {
    function ListTilkPage(viewCtrl, globalservice, helperservice, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projectid = navParams.get('projectid');
    }
    ListTilkPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ListTilkPage');
        this.globalservice.listtilk(this.projectid).subscribe(function (resp) {
            console.log(resp.contents);
            if (resp.contents != "") {
                _this.tik_list = resp.contents;
            }
            else {
                _this.helperservice.sendalertmessage('bottom', 'No Projects Created');
            }
            //this.navCtrl.push('tilkee_api_integration');
        }, function (err) {
            _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
        });
    };
    ListTilkPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ListTilkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-tilk',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/list-tilk/list-tilk.html"*/'<!--\n  Generated template for the ListTilkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Created Access Link</ion-title>\n      <button  (click)="dismiss()" class="canc-bt">Cancel <ion-icon name="md-close" showWhen="android,windows"></ion-icon></button>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding> \n  \n      <div class="container">\n          <ion-grid>\n              <ion-row>\n  \n                  <ion-col col-12>\n                    <div class="bussiness-table-wrap">\n                      <table class="bussiness-table">\n                          <tr>\n                               <th>Project Titel</th>\n                               <th>Created For</th>\n                              <th>created At</th>\n                              <th>Link</th>\n                              \n                        </tr>\n                        <tr *ngFor ="let data of tik_list" >\n                         \n                          <td>{{data.project_name}}</td>\n                          <td>{{data.name}}</td>\n                          <td>{{data.created_at | date:\'medium\'}}</td>\n                          <td><ion-input type="text" value="{{data.link\n                            }}"></ion-input></td>\n                            \n                         \n          \n                        </tr>\n                        \n                          \n                         \n                                  \n                      </table>\n                    </div>\n                  </ion-col>\n                </ion-row>\n                    </ion-grid>\n                    </div>\n      <!-- <ion-tags-input [(ngModel)]="tags" (onChange)="onChange($event)"></ion-tags-input> -->\n    \n    </ion-content>\n  \n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/list-tilk/list-tilk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ListTilkPage);
    return ListTilkPage;
}());

//# sourceMappingURL=list-tilk.js.map

/***/ })

});
//# sourceMappingURL=21.js.map