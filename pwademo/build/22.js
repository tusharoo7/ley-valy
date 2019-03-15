webpackJsonp([22],{

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProjectsPageModule", function() { return ListProjectsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_projects__ = __webpack_require__(883);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListProjectsPageModule = /** @class */ (function () {
    function ListProjectsPageModule() {
    }
    ListProjectsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_projects__["a" /* ListProjectsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_projects__["a" /* ListProjectsPage */]),
            ],
        })
    ], ListProjectsPageModule);
    return ListProjectsPageModule;
}());

//# sourceMappingURL=list-projects.module.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProjectsPage; });
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
 * Generated class for the ListProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListProjectsPage = /** @class */ (function () {
    function ListProjectsPage(modalCtrl, globalservice, helperservice, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.readstatus = 1;
    }
    ListProjectsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //  window.location.reload();
        this.globalservice.listproject(this.readstatus).subscribe(function (resp) {
            console.log(resp.contents);
            if (resp.contents != "") {
                _this.projects_list = resp.contents;
            }
            else {
                _this.helperservice.sendalertmessage('bottom', 'No Projects Created');
            }
            //this.navCtrl.push('tilkee_api_integration');
        }, function (err) {
            _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
        });
    };
    ListProjectsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ListProjectsPage');
        this.globalservice.listproject(this.readstatus).subscribe(function (resp) {
            console.log(resp.contents);
            if (resp.contents != "") {
                _this.projects_list = resp.contents;
            }
            else {
                _this.helperservice.sendalertmessage('bottom', 'No Projects Created');
            }
            //this.navCtrl.push('tilkee_api_integration');
        }, function (err) {
            _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
        });
    };
    ListProjectsPage.prototype.addfile = function (projectid) {
        console.log(projectid);
        var profileModal = this.modalCtrl.create('FileUploadPage', { projectid: projectid });
        profileModal.present();
    };
    ListProjectsPage.prototype.addlink = function (projectid) {
        console.log(projectid);
        var profileModal = this.modalCtrl.create('TilkCreatePage', { projectid: projectid });
        profileModal.present();
    };
    ListProjectsPage.prototype.createdlink = function (projectid) {
        var profileModal = this.modalCtrl.create('ListTilkPage', { projectid: projectid });
        profileModal.present();
    };
    ListProjectsPage.prototype.viewstat = function (projectid) {
        var profileModal = this.modalCtrl.create('TilkStatPage', { projectid: projectid });
        profileModal.present();
    };
    ListProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-projects',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/list-projects/list-projects.html"*/'<!--\n  Generated template for the ListProjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Created Project List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="container">\n      <ion-grid>\n      \n        <ion-row>\n  \n          <ion-col col-12>\n            <div class="bussiness-table-wrap">\n              <table class="bussiness-table">\n                  <tr>\n                       <th>Project Titel</th>\n                       <th>Project Preview</th>\n                      <th>created At</th>\n                      <th>Document Attached</th>\n                      <th>Statistic</th>\n                      <th>Create  Access Link</th>\n                      <th >Action</th>\n                </tr>\n                <tr *ngFor ="let data of projects_list" >\n                 \n                  <td>{{data.name}}</td>\n                  <td><a href="{{data.preview}}" target="blank">CLick here</a></td>\n                  <td>{{data.created_at | date:\'shortDate\'}}</td>\n                  <td>{{data.project_items_count\n                    }}</td>\n                   \n                    <td><button ion-button round color="dark" (click)="viewstat(data.id)">View Stat</button></td>\n                    <td >\n                      \n                      <button ion-button round (click)="createdlink(data.id)">Created Link </button>\n                      <button ion-button round color="dark" (click)="addlink(data.id)">Create Link</button>\n                    </td>\n                  <td >\n                      <button ion-button round (click)="addfile(data.id)" >Add Docs</button>\n                  </td>\n                 \n  \n                </tr>\n                \n                  \n                 \n                          \n              </table>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    \n    \n    \n  </ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/list-projects/list-projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ListProjectsPage);
    return ListProjectsPage;
}());

//# sourceMappingURL=list-projects.js.map

/***/ })

});
//# sourceMappingURL=22.js.map