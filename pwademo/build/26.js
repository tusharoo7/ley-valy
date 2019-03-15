webpackJsonp([26],{

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectPageModule", function() { return CreateProjectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_project__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_helper_helper_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_value_global_value__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_api_apitwo_service__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// imported custom services  and providers



var CreateProjectPageModule = /** @class */ (function () {
    function CreateProjectPageModule() {
    }
    CreateProjectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_project__["a" /* CreateProjectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_project__["a" /* CreateProjectPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_helper_helper_service__["a" /* HelperService */],
                __WEBPACK_IMPORTED_MODULE_5__providers_global_value_global_value__["a" /* GlobalValueProvider */],
                __WEBPACK_IMPORTED_MODULE_6__services_api_apitwo_service__["a" /* ApitwoService */]
            ]
        })
    ], CreateProjectPageModule);
    return CreateProjectPageModule;
}());

//# sourceMappingURL=create-project.module.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProjectPage; });
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
 * Generated class for the CreateProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateProjectPage = /** @class */ (function () {
    function CreateProjectPage(globalservice, helperservice, navCtrl, navParams) {
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.project = {
            'name': '',
            'archived_at': '',
            'can_be_downloaded': '',
            'duration': '',
            'external_id': ''
        };
    }
    CreateProjectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateProjectPage');
    };
    // CREATE NEW PROJECT
    CreateProjectPage.prototype.create_a_project = function () {
        var _this = this;
        if (this.project.name == '') {
            this.helperservice.sendalertmessage('bottom', 'Please Enter Your Project Name');
        }
        else {
            var loadingPop_1 = this.helperservice.createLoadingBar();
            loadingPop_1.present();
            this.globalservice.addproject(this.project).subscribe(function (resp) {
                loadingPop_1.dismiss();
                //this.navCtrl.push('tilkee_api_integration');
                if (resp.id != "") {
                    _this.helperservice.sendalertmessage('bottom', 'Project Created Sucessfully');
                    _this.navCtrl.push('tilkee_api_integration');
                }
                else {
                    _this.helperservice.sendalertmessage('bottom', 'Failure ,Project Not Created');
                }
            }, function (err) {
                _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
            });
        }
    };
    CreateProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-project',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/create-project/create-project.html"*/'<!--\n  Generated template for the CreateProjectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create A New Project</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <ion-grid>\n      <ion-row> \n        <ion-col col-12>\n            <form (ngSubmit)="create_a_project()">\n            <ion-list>\n                <ion-item>\n                    <ion-input type="text" name="pname" placeholder="Project Name" [(ngModel)]="project.name"\n                     ></ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-input type="date" name="archived_at" placeholder="Date of Archived" [(ngModel)]="project.archived_at"\n                       ></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Can be Downloaded</ion-label>\n                         <ion-select name="can_be_downloaded" [(ngModel)]="project.can_be_downloaded">\n                            <ion-option value="true">TRUE</ion-option>\n                            <ion-option value="false">FALSE</ion-option>\n                          </ion-select>\n\n                      </ion-item>\n                      <ion-item>\n                          <ion-input type="number" name="duration" placeholder="Duration of Project" [(ngModel)]="project.duration"\n                           ></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-input type="text" name="external_id" placeholder="Project External id" [(ngModel)]="project.external_id"\n                             ></ion-input>\n                          </ion-item>\n           </ion-list>\n           <button ion-button class="log-in-bt" type="submit" >Create Project</button>\n          </form>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/create-project/create-project.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], CreateProjectPage);
    return CreateProjectPage;
}());

//# sourceMappingURL=create-project.js.map

/***/ })

});
//# sourceMappingURL=26.js.map