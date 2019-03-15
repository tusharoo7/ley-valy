webpackJsonp([23],{

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadPageModule", function() { return FileUploadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_upload__ = __webpack_require__(882);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileUploadPageModule = /** @class */ (function () {
    function FileUploadPageModule() {
    }
    FileUploadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_upload__["a" /* FileUploadPage */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__file_upload__["a" /* FileUploadPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_upload__["a" /* FileUploadPage */]),
            ],
        })
    ], FileUploadPageModule);
    return FileUploadPageModule;
}());

//# sourceMappingURL=file-upload.module.js.map

/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadPage; });
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
 * Generated class for the FileUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileUploadPage = /** @class */ (function () {
    function FileUploadPage(globalservice, helperservice, viewCtrl, navCtrl, navParams) {
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log('projectid', navParams.get('projectid'));
        this.projectid = navParams.get('projectid');
    }
    FileUploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FileUploadPage');
    };
    FileUploadPage.prototype.addcontent = function () {
        var _this = this;
        if (this.entrytext == '' || this.entrytext == null || this.entrytext == undefined) {
            this.helperservice.sendalertmessage('bottom', 'Please Enter Some Text Content');
        }
        else {
            if (this.texttitel == "") {
                this.texttitel = "No Sub Titel";
            }
            else {
                this.texttitel = this.texttitel;
            }
            var externalid = Math.floor((Math.random() * 9999) + 1000);
            var addcontenttext = [{
                    "content": this.entrytext,
                    "title": this.texttitel,
                    "type": "text",
                    "external_id": externalid.toString()
                }];
            var loadingPop_1 = this.helperservice.createLoadingBar();
            loadingPop_1.present();
            this.globalservice.addfile(addcontenttext).subscribe(function (resp) {
                // console.log(resp);
                // console.log(resp[0].id);
                //this.navCtrl.push('tilkee_api_integration');
                if (resp.id != "") {
                    //console.log(resp[0].id);
                    var addfiledata = {
                        "file_id": resp[0].id,
                        "project_id": _this.projectid
                    };
                    _this.globalservice.addfiletoproject(addfiledata).subscribe(function (response) {
                        // console.log(response);
                        if (response[0].id != "") {
                            loadingPop_1.dismiss();
                            _this.helperservice.sendalertmessage('bottom', 'File added sucessfully with this project ');
                            _this.navCtrl.push('list_projects');
                        }
                    }, function (err) {
                        _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
                    });
                }
                else {
                    loadingPop_1.dismiss();
                    _this.helperservice.sendalertmessage('bottom', 'Failure ,File Not Uploaded');
                    _this.navCtrl.push('list_projects');
                }
            }, function (err) {
                _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
                _this.navCtrl.push('list_projects');
            });
        }
    };
    FileUploadPage.prototype.addcontentfromurl = function () {
        var _this = this;
        if (this.external_url == '' || this.external_url == null || this.external_url == undefined) {
            this.helperservice.sendalertmessage('bottom', 'Please Enter Correct Content Url');
        }
        else {
            if (this.urltitel == "") {
                this.urltitel = "No Sub Titel";
            }
            else {
                this.urltitel = this.urltitel;
            }
            var externalid = Math.floor((Math.random() * 9999) + 1000);
            var addcontentlink = [{
                    "title": this.urltitel,
                    "type": "link",
                    "url": this.external_url,
                    "external_id": externalid.toString()
                }];
            // console.log(addcontentlink)  ;   
            var loadingPop_2 = this.helperservice.createLoadingBar();
            loadingPop_2.present();
            this.globalservice.addfile(addcontentlink).subscribe(function (resp) {
                loadingPop_2.dismiss();
                console.log(resp);
                //this.navCtrl.push('tilkee_api_integration');
                if (resp.id != "") {
                    var addfiledata = {
                        "file_id": resp[0].id,
                        "project_id": _this.projectid
                    };
                    _this.globalservice.addfiletoproject(addfiledata).subscribe(function (response) {
                        // console.log(response);
                        if (response[0].id != "") {
                            loadingPop_2.dismiss();
                            _this.helperservice.sendalertmessage('bottom', 'File added sucessfully with this project ');
                            _this.navCtrl.push('list_projects');
                        }
                    }, function (err) {
                        _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
                    });
                    _this.helperservice.sendalertmessage('bottom', 'File Uploaded Sucessfully');
                    //this.navCtrl.push('tilkee_api_integration');  
                    _this.navCtrl.push('list_projects');
                }
                else {
                    _this.helperservice.sendalertmessage('bottom', 'Failure ,File Not Uploaded');
                    _this.navCtrl.push('list_projects');
                }
            }, function (err) {
                _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
            });
        }
    };
    FileUploadPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FileUploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-file-upload',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/file-upload/file-upload.html"*/'<!--\n  Generated template for the FileUploadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>file-upload</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content> -->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Add Files\n    </ion-title>\n    <button  (click)="dismiss()" class="canc-bt">Cancel <ion-icon name="md-close" showWhen="android,windows"></ion-icon></button>\n    <!-- <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="container">\n        <ion-grid>\n        <ion-row>\n            <ion-col col-12>\n                <div class="fileupload-in-form-cont">\n            <ion-list>\n                <h3>Create items from a text</h3>\n                <ion-item>\n                    <ion-input  name="texttitel" placeholder="Add Content Titel" [(ngModel)]="texttitel" ></ion-input> \n                     \n                  </ion-item>\n                <ion-item>\n                    <ion-textarea name="entrytext" placeholder="Write Some Content " [(ngModel)]="entrytext"></ion-textarea> \n                     \n                  </ion-item>\n                  <button ion-button class="fileuploadone-in-bt" type="button" (click)="addcontent()" >Add to Project</button>\n               \n             \n             </ion-list>\n             <ion-list>\n             <h3>Create items from external content</h3>\n             <ion-item>\n                <ion-input  name="urltitel" placeholder="Add File Titel" [(ngModel)]="urltitel" ></ion-input> \n                 \n              </ion-item>\n             <ion-item>\n                <ion-input  name="fileurl" placeholder="Add file url" [(ngModel)]="external_url" ></ion-input> \n                 \n              </ion-item>\n              <button ion-button class="fileupload-in-bt" type="button" (click)="addcontentfromurl()" >Add to Project</button>\n             </ion-list>\n            </div>\n          </ion-col>\n        </ion-row>\n        </ion-grid>            \n      </div>\n      </ion-content>\n\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/file-upload/file-upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], FileUploadPage);
    return FileUploadPage;
}());

//# sourceMappingURL=file-upload.js.map

/***/ })

});
//# sourceMappingURL=23.js.map