webpackJsonp([16],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BussinesscardEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_image_compress__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_image_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_account_my_account__ = __webpack_require__(20);
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
 * Generated class for the BussinesscardEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BussinesscardEditPage = /** @class */ (function () {
    function BussinesscardEditPage(helperservice, globalservice, navCtrl, navParams) {
        this.helperservice = helperservice;
        this.globalservice = globalservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.uploadedimage = "";
        this.camcardresponse = "";
        this.base64textString = "";
        this.image_name = "";
        this.image_ext = "";
        this.remarks = "";
        this.showTitle = false;
        this.validation = "";
        this.card_details = navParams.get('card_details');
        this.camcardresponse = navParams.get('data');
        console.log(this.camcardresponse);
        console.log(JSON.stringify(this.camcardresponse));
        console.log(this.card_details);
        // check all data 
        if (this.camcardresponse != undefined && this.camcardresponse != "") {
            this.titel = "Add";
            this.uploadedimage = navParams.get('image');
            this.image_name = navParams.get('image_base64_raw');
            this.image_ext = "png";
            this.card_holder_id = "";
            this.json_response = JSON.stringify(this.camcardresponse);
            this.caller = 'General';
            if (this.camcardresponse.hasOwnProperty("formatted_name")) {
                if (this.camcardresponse.formatted_name[0].item != undefined
                    && this.camcardresponse.formatted_name[0].item != null
                    && this.camcardresponse.formatted_name[0].item != "") {
                    this.card_holder_name = this.camcardresponse.formatted_name[0].item;
                }
                else {
                    this.card_holder_name = "";
                }
            }
            else {
                this.card_holder_name = "";
            }
            if (this.camcardresponse.hasOwnProperty("email")) {
                console.log("b1");
                if (this.camcardresponse.email[0].item != undefined
                    && this.camcardresponse.email[0].item != null
                    && this.camcardresponse.email[0].item != "") {
                    this.card_holder_email = this.camcardresponse.email[0].item;
                }
                else {
                    this.card_holder_email = "";
                }
            }
            else {
                this.card_holder_email = "";
            }
            if (this.camcardresponse.hasOwnProperty("title")) {
                if (this.camcardresponse.title[0].item != undefined
                    && this.camcardresponse.title[0].item != null
                    && this.camcardresponse.title[0].item != "") {
                    this.card_holder_position = this.camcardresponse.title[0].item;
                }
                else {
                    this.card_holder_position = "";
                }
            }
            else {
                this.card_holder_position = "";
            }
            if (this.camcardresponse.hasOwnProperty("organization")) {
                if (this.camcardresponse.organization[0].item.name != undefined
                    && this.camcardresponse.organization[0].item.name != null
                    && this.camcardresponse.organization[0].item.name != "") {
                    this.card_holder_company = this.camcardresponse.organization[0].item.name;
                }
                else {
                    this.card_holder_company = "";
                }
            }
            else {
                this.card_holder_company = "";
            }
            if (this.camcardresponse.hasOwnProperty("telephone")) {
                console.log(Object.keys(this.camcardresponse.telephone).length);
                if (Object.keys(this.camcardresponse.telephone).length == 1) {
                    if (this.camcardresponse.telephone[0].item.number != undefined
                        && this.camcardresponse.telephone[0].item.number != null
                        && this.camcardresponse.telephone[0].item.number != "") {
                        this.card_holder_contact_one = this.camcardresponse.telephone[0].item.number;
                    }
                    else {
                        this.card_holder_contact_one = "";
                    }
                    this.card_holder_contact_two = "";
                }
                else {
                    if (this.camcardresponse.telephone[0].item.number != undefined
                        && this.camcardresponse.telephone[0].item.number != null
                        && this.camcardresponse.telephone[0].item.number != "") {
                        this.card_holder_contact_one = this.camcardresponse.telephone[0].item.number;
                    }
                    else {
                        this.card_holder_contact_one = "";
                    }
                    if (this.camcardresponse.telephone[1].item.number != undefined
                        && this.camcardresponse.telephone[1].item.number != null
                        && this.camcardresponse.telephone[1].item.number != "") {
                        this.card_holder_contact_two = this.camcardresponse.telephone[1].item.number;
                    }
                    else {
                        this.card_holder_contact_two = "";
                    }
                }
            }
            else {
                this.card_holder_contact_one = "";
                this.card_holder_contact_two = "";
            }
            if (this.camcardresponse.hasOwnProperty("address")) {
                if (this.camcardresponse.address[0].item.street != undefined
                    && this.camcardresponse.address[0].item.street != null
                    && this.camcardresponse.address[0].item.street != "") {
                    if (this.camcardresponse.address[0].item.hasOwnProperty("postal_code")) {
                        console.log("b2");
                        this.card_holder_office_address = this.camcardresponse.address[0].item.street + ', P.O :' + this.camcardresponse.address[0].item.postal_code;
                    }
                    else {
                        this.card_holder_office_address = this.camcardresponse.address[0].item.street;
                    }
                }
                else {
                    this.card_holder_office_address = "";
                }
            }
            else {
                this.card_holder_office_address = "";
            }
            if (this.camcardresponse.hasOwnProperty("url")) {
                if (this.camcardresponse.url[0].item != undefined
                    && this.camcardresponse.url[0].item != null
                    && this.camcardresponse.url[0].item != "") {
                    this.card_holder_office_website = this.camcardresponse.url[0].item;
                }
                else {
                    this.card_holder_office_website = "";
                }
            }
            else {
                this.card_holder_office_website = "";
            }
        }
        if (this.card_details != undefined && this.card_details != "") {
            this.titel = "Save";
            this.caller = 'Camcard';
            this.card_holder_office_address = "";
            this.card_holder_office_website = "";
            this.card_holder_company = this.card_details.company;
            this.card_holder_position = this.card_details.position;
            this.uploadedimage = this.card_details.cardPic;
            this.card_holder_firstName = this.card_details.firstName;
            this.card_holder_lastName = this.card_details.lastName;
            this.card_holder_name = "";
            this.remarks = this.card_details.remarks;
            this.card_holder_email = this.card_details.email;
            this.card_holder_contact_one = this.card_details.mobile;
            this.card_holder_contact_two = this.card_details.phone;
        }
    }
    BussinesscardEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BussinesscardEditPage');
        var objAgent = navigator.userAgent;
        var objbrowserName = navigator.appName;
        var objfullVersion = '' + parseFloat(navigator.appVersion);
        var objBrMajorVersion = parseInt(navigator.appVersion, 10);
        var objOffsetName, objOffsetVersion, ix;
        // In Chrome 
        if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
            objbrowserName = "Chrome";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
        }
        else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
            objbrowserName = "Microsoft Internet Explorer";
            objfullVersion = objAgent.substring(objOffsetVersion + 5);
        }
        else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
            objbrowserName = "Firefox";
        }
        else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
            objbrowserName = "Safari";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
            if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
                objfullVersion = objAgent.substring(objOffsetVersion + 8);
        }
        else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) <
            (objOffsetVersion = objAgent.lastIndexOf('/'))) {
            objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
            objfullVersion = objAgent.substring(objOffsetVersion + 1);
            if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
                objbrowserName = navigator.appName;
            }
        }
        // trimming the fullVersion string at semicolon/space if present
        if ((ix = objfullVersion.indexOf(";")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        if ((ix = objfullVersion.indexOf(" ")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        objBrMajorVersion = parseInt('' + objfullVersion, 10);
        if (isNaN(objBrMajorVersion)) {
            objfullVersion = '' + parseFloat(navigator.appVersion);
            objBrMajorVersion = parseInt(navigator.appVersion, 10);
        }
        this.osversion = objbrowserName + "_" + objfullVersion;
    };
    // ADD NEW BUISNESS CARD
    BussinesscardEditPage.prototype.add_new_card = function () {
        var _this = this;
        // if data edit from normal card edit {start}
        if (this.card_details != undefined && this.card_details != "") {
            if (this.card_holder_firstName == '') {
                this.helperservice.sendalertmessage('bottom', 'Please enter your first name');
            }
            else if (this.card_holder_lastName == '') {
                this.helperservice.sendalertmessage('bottom', 'Please enter your last name');
            }
            else if (this.card_holder_email == undefined || this.card_holder_email == null || this.card_holder_email == '') {
                this.helperservice.sendalertmessage('bottom', 'Please enter your email');
            }
            else if (!new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.card_holder_email)) {
                this.helperservice.sendalertmessage('bottom', 'Please enter proper email ');
            }
            else {
                this.validation = 1;
            }
            this.card_holder_id = this.card_details.cardId;
            this.json_response = '{}';
        }
        // if data edit from normal card edit {end}
        // if data edit from camcard  card edit {start}
        if (this.camcardresponse != undefined && this.camcardresponse != "") {
            if (this.card_holder_name == '') {
                this.helperservice.sendalertmessage('bottom', 'Please enter your  name');
            }
            else if (this.card_holder_email == undefined || this.card_holder_email == null || this.card_holder_email == '') {
                this.helperservice.sendalertmessage('bottom', 'Please enter your email');
            }
            else if (!new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.card_holder_email)) {
                this.helperservice.sendalertmessage('bottom', 'Please enter proper email ');
            }
            else {
                this.validation = 1;
            }
            var username = this.card_holder_name.split(' ');
            this.card_holder_firstName = username[0];
            this.card_holder_lastName = username[1];
        }
        if (this.validation == 1) {
            var loadingPop_1 = this.helperservice.createLoadingBar();
            loadingPop_1.present();
            var add_card = {
                'locale': 'en',
                'firstName': this.card_holder_firstName,
                'lastName': this.card_holder_lastName,
                'email': this.card_holder_email,
                'mobile': this.card_holder_contact_one,
                'phone': this.card_holder_contact_two,
                'sessionId': localStorage.getItem('customerSessionId'),
                'company': this.card_holder_company,
                'os': 'Web',
                'position': this.card_holder_position,
                'osVersion': this.osversion,
                'appVersion': '1.0',
                'customerId': localStorage.getItem("customerId"),
                // ==================
                'cardPic': this.image_name,
                'cardPicExt': this.image_ext,
                // ==================
                'remarks': this.remarks,
                'jsonResponse': this.json_response,
                'cardId': this.card_holder_id,
                'caller': this.caller
            };
            console.log(add_card);
            this.globalservice.add_bisnes_card(add_card).subscribe(function (resp) {
                loadingPop_1.dismiss();
                console.log(resp);
                // this.navCtrl.push(HomePage);
                if (resp.responseStatus.STATUS == "SUCCESS") {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                }
                else {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
            }, function (err) {
                _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
            });
        }
    };
    BussinesscardEditPage.prototype.onFileChanged = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        var fileList;
        var images = [];
        __WEBPACK_IMPORTED_MODULE_2_ng2_image_compress__["ImageCompressService"].filesToCompressedImageSource(event.target.files).then(function (observableImages) {
            observableImages.subscribe(function (image) {
                images.push(image);
            }, function (error) {
                console.log("Error while converting");
            }, function () {
                _this.processedImages = images;
                console.log("modifiedimage :");
                console.log(_this.processedImages);
                var str = _this.processedImages[0].compressedImage.imageDataUrl;
                var ix = str.indexOf(",");
                var objfullVersion = str.substring(ix + 1);
                console.log(objfullVersion);
                _this.image_name = objfullVersion;
                _this.base64textString = _this.processedImages[0].compressedImage.imageDataUrl;
                _this.showTitle = true;
            });
        });
        // console.log(this.selectedFile) processedImages image_name showTitle image_ext
        var image_name = this.selectedFile.name;
        var res_img = image_name.split(".");
        this.image_ext = res_img[1];
        // console.log(this.image_ext);
        var files = event.target.files;
    };
    //import { MyAccountPage } from '../my-account/my-account';
    // BACK TO DASHBOARD
    BussinesscardEditPage.prototype.got_to_home = function () {
        var index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__my_account_my_account__["a" /* MyAccountPage */]);
    };
    BussinesscardEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bussinesscard-edit',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/bussinesscard-edit/bussinesscard-edit.html"*/'<!--\n  Generated template for the BussinesscardEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation. \n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{titel}} business card</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="container">\n        <div class="container">\n            <ion-grid>\n                <ion-row>\n                  <ion-col>\n                      <div class="profile-image-wrap">\n                          <div class="profile-pic">\n                              \n\n                                <div *ngIf="base64textString !=\'\'" >\n                                    <div class="card_img">\n                                     \n                                    <img src="{{base64textString}}" alt="">\n                                  </div>\n                                  </div>\n                                  <div class="pro-dp" *ngIf="base64textString ==\'\'" >\n                                    \n                                      <div class="card_img">\n                                          <img src="{{uploadedimage}}" alt="" />\n                                        </div>\n                                    </div> \n\n                                    <!-- <div *ngIf="camcardresponse ==undefined">\n                                      \n                                        <input style="display: none"  type="file" accept="image/*" (change)="onFileChanged($event)" #fileInput>\n                                        <span (click)="fileInput.click()" style="cursor: pointer;"> <ion-icon ios="md-create" md="md-create"></ion-icon></span>\n                                    </div>     -->\n                                \n                            </div>\n                            </div>\n                            <div class="profile-form-wrap">\n                                <ion-list>\n                                  <!-- ====== check the data com from ======= -->\n                                  <div *ngIf="camcardresponse !=undefined">\n                                      <div class="static_col">\n                                          <ion-item>\n                                              <ion-input type="text" name="card_holder_name" placeholder="Card holder name" [(ngModel)]="card_holder_name" ></ion-input>\n                                            <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n                                          </ion-item>\n                                        </div>\n                                  </div>\n                                  <div *ngIf="card_details !=undefined">\n                                      <div class="static_col">\n                                          <ion-item>\n                                            <ion-input type="text" name="customerFirstName" placeholder="First name" [(ngModel)]="card_holder_firstName"></ion-input>\n                                            <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n                                          </ion-item>\n                                        </div>\n                                        <div class="static_col">\n                                          <ion-item>\n                                            <ion-input type="text" name="customerLastName" placeholder="Last name" [(ngModel)]="card_holder_lastName"></ion-input>\n                                            <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n                                          </ion-item>\n                                        </div>\n                                    </div>\n\n                                    \n                                      <div class="static_col">\n                                          <ion-item>\n                                              <ion-input type="email" name="card_holder_email" placeholder="Card Holder Email" [(ngModel)]="card_holder_email" placeholder="Email" ></ion-input>\n                                            <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-6.png" alt=""></ion-label>\n                                          </ion-item>\n                                        </div>\n                                        \n                                          <div class="static_col">\n                                              <ion-item>\n                                                  <ion-input type="text" name="card_holder_company" placeholder="Company" [(ngModel)]="card_holder_company" ></ion-input>\n                                                <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-2.png" alt=""></ion-label>\n                                              </ion-item>\n                                            </div>\n                                            <div class="static_col">\n                                              <ion-item>\n                                                  <ion-input type="text" name="card_holder_position" placeholder="Position" [(ngModel)]="card_holder_position"  ></ion-input>\n                                                <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-3.png" alt=""></ion-label>\n                                              </ion-item>\n                                            </div>\n                                            <div class="static_col">\n                                                <ion-item>\n                                                    <ion-input type="text" name="card_holder_contact_one" [(ngModel)]="card_holder_contact_one"  placeholder="Mobile" ></ion-input>\n                                                  <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-4.png" alt=""></ion-label>\n                                                </ion-item>\n                                              </div>\n                                              <div class="static_col">\n                                                <ion-item>\n                                                    <ion-input type="text" name="card_holder_contact_two" [(ngModel)]="card_holder_contact_two"  placeholder="Phone" ></ion-input>\n                                                  <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-5.png" alt=""></ion-label>\n                                                </ion-item>\n                                              </div>\n                                              <div class="static_col">\n                                                <ion-item class="texta">\n                                                    <ion-textarea name="remarks" style="resize: none;" [(ngModel)]="remarks" placeholder="Remarks" ></ion-textarea>\n                                                  <ion-label class="address-icon-wrap"><img src="assets/imgs/address.png" alt=""></ion-label>\n                                                </ion-item>\n                                              </div>\n                                              <!-- <div class="static_col">\n                                                  <ion-item class="texta">\n                                                      <ion-textarea name="card_holder_office_address" [(ngModel)]="card_holder_office_address" placeholder="Office Address" ></ion-textarea>\n                                                    <ion-label class="address-icon-wrap"><img src="assets/imgs/address.png" alt=""></ion-label>\n                                                  </ion-item>\n                                                </div> -->\n                                                <!-- <div class="static_col">\n                                                    <ion-item>\n                                                        <ion-input type="text" name="card_holder_office_website" [(ngModel)]="card_holder_office_website" placeholder="Office Website" ></ion-input>\n                                                      <ion-label class="mail-icon-wrap"><img src="assets/imgs/website.png" alt=""></ion-label>\n                                                    </ion-item>\n                                                  </div> -->\n                                </ion-list>\n                                <button ion-button class="log-in-bt" (click)="add_new_card()" type="submit">{{titel}}</button>\n                            </div>\n                  </ion-col>\n                  </ion-row>\n                  </ion-grid>\n          </div>\n          </div>\n  <!-- <div class="container">\n    <div class="edit_box">\n      <div class="card_img">\n        <img src="{{uploadedimage}}" alt="" />\n      </div>\n      <div class="edit_icon">\n        <span class="edit"><span></span></span>\n      </div>\n      <div class="form_area">\n        <form>\n          <ion-list>\n            <ion-item>\n              <ion-input type="text" name="card_holder_name" placeholder="Card Holder Name" [(ngModel)]="card_holder_name" ></ion-input>\n              <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-list>\n            <ion-item>\n              <ion-input type="text" name="card_holder_email" placeholder="Card Holder Email" [(ngModel)]="card_holder_email" placeholder="email" ></ion-input>\n              <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-6.png" alt=""></ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-list>\n            <ion-item>\n              <ion-input type="text" name="card_holder_position" placeholder="Card Holder Position" [(ngModel)]="card_holder_position"  ></ion-input>\n              <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-3.png" alt=""></ion-label>\n            </ion-item>\n          </ion-list>\n          \n              <ion-list>\n                  <ion-item>\n                    <ion-input type="text" name="card_holder_company" placeholder="company" [(ngModel)]="card_holder_company" ></ion-input>\n                    <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-2.png" alt=""></ion-label>\n                  </ion-item>\n                </ion-list>\n              \n          \n          \n          <ion-list>\n            <ion-item>\n              <ion-input type="text" name="card_holder_contact_one" [(ngModel)]="card_holder_contact_one"  placeholder="Contact No 1" ></ion-input>\n              <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-4.png" alt=""></ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-list>\n            <ion-item>\n              <ion-input type="text" name="card_holder_contact_two" [(ngModel)]="card_holder_contact_two"  placeholder="Contact No 2" ></ion-input>\n              <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-5.png" alt=""></ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-list>\n              <ion-item>\n                  <ion-textarea name="card_holder_office_address" [(ngModel)]="card_holder_office_address" placeholder="Office Address"  rows="1" maxLength="500" ></ion-textarea>\n            \n                <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n              </ion-item>\n            </ion-list>\n            <ion-list>\n                <ion-item>\n                  <ion-input type="text" name="card_holder_office_website" [(ngModel)]="card_holder_office_website" placeholder="Office Website" ></ion-input>\n                  <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n                </ion-item>\n              </ion-list>\n          <div class="btn_area">\n            <button ion-button class="log-in-bt" type="submit" >Sign Up</button> <button ion-button class="delete-bt" type="submit" >Cancel</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div> -->\n  <ion-fab right bottom class="home-menu"> \n    <button  (click)="got_to_home()" ion-fab color="danger"><ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/bussinesscard-edit/bussinesscard-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], BussinesscardEditPage);
    return BussinesscardEditPage;
}());

//# sourceMappingURL=bussinesscard-edit.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectStatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_account_my_account__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tilk_stat_tilk_stat__ = __webpack_require__(170);
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
 * Generated class for the ProjectStatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage({name :"projectstat"})
//declare var google: any;
var ProjectStatPage = /** @class */ (function () {
    // public columnChartData:any =  {
    //   chartType: 'ColumnChart',
    //   dataTable: [
    //     ['Country', 'Performance', 'Profits'],
    //     ['Germany', 700, 1200],
    //     ['USA', 300, 600],
    //     ['Brazil', 400, 500],
    //     ['Canada', 500, 1000],
    //     ['France', 600, 1100],
    //     ['RU', 800, 1000]
    //   ],
    //   options: {title: 'Countries'}
    // };
    function ProjectStatPage(navCtrl, navParams, globalservice, helperservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.projectid = navParams.get('projectid');
        this.projectname = navParams.get('projectname');
        console.log(this.projectid);
        // google.charts.load('current', {'packages':['corechart', 'bar']});
    }
    ProjectStatPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //  window.location.reload();
        var loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();
        this.globalservice.listtilkeestat(this.projectid).subscribe(function (resp) {
            loadingPop.dismiss();
            console.log(resp.contents);
            _this.tik_list_stat = resp.contents;
            //this.navCtrl.push('tilkee_api_integration');
        }, function (err) {
            _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
        });
    };
    ProjectStatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectStatPage');
    };
    // get statistic details
    ProjectStatPage.prototype.view_stat_details = function (tilk_id, projectname, pdate, stime, titel) {
        //let profileModal = this.modalCtrl.create('TilkStatPage', { 'projectid': this.projectId_tilkee,'id_connexion':tilk_id });
        // profileModal.present();
        console.log(this.projectid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tilk_stat_tilk_stat__["a" /* TilkStatPage */], { 'projectid': this.projectid, 'id_connexion': tilk_id, 'projectname': projectname, 'pdate': pdate, 'stime': stime, 'titel': titel });
        // this.navCtrl.push('TilkStatPage', { 'projectid': this.projectid,'id_connexion':tilk_id,'projectname' :projectname,'pdate':pdate ,'stime' :stime,'titel':titel})
    };
    // back to dashboard
    ProjectStatPage.prototype.got_to_home = function () {
        var index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__my_account_my_account__["a" /* MyAccountPage */]);
    };
    // convert integer to hour mintues second 
    ProjectStatPage.prototype.converttime = function (time) {
        var hoursting = "";
        var mintuestring = "";
        var seconstring = "";
        // var seconds = (time/1000);
        // var minutes = seconds/60;
        // let mnc= (seconds%60).toFixed(2);
        // seconds = +mnc
        // var hours = (minutes/60);
        // minutes = minutes%60;
        var total = Math.floor(time / 1000);
        var seconds = total % 60;
        total = total / 60;
        Math.random();
        var minutes = Math.floor(total % 60);
        // total = total / 60;
        // var hours = Math.floor(total / 60);
        var hours = 3;
        var timestring = { 'hour': hours, 'minutes': minutes, 'seconds': seconds };
        if (hours >= 1) {
            hoursting = hours + ':';
        }
        else {
            hoursting = '00' + ':';
        }
        if (minutes >= 1) {
            mintuestring = minutes + ':';
        }
        else {
            mintuestring = '00' + ':';
        }
        // 0, 0, 0, 7, 23, 0, 0
        return timestring;
    };
    ProjectStatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-project-stat',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/project-stat/project-stat.html"*/'<!--\n  Generated template for the ProjectStatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n  CONTACT	DATE D\'ACCÈS	TEMPS DE LECTURE	POURCENTAGE LU	TÉLÉCHARGÉ	APPAREIL	DÉTAILS\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Statistiques</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <div class="bussiness-card-top-box">\n        <!-- <h2>  Bar Chart</h2> -->\n        \n\n        <!-- <div id="barchart"></div> -->\n        \n    <div class="internert_wrap">\n       <h2 style="text-align: center"><b>{{projectname}}</b></h2>\n        <div class="internet_table">\n        <table>\n          <tbody>\n            <tr>\n                						\n              <th width="150">Contact</th>\n              <th  width="120">Date d\'accés </th>\n              <th>Temps de lecture</th>\n              <th>Pourcentage lu</th>\n              <!-- <th width="140">Téléchargé</th> -->\n              <th width="140">Appareils</th>\n              <th width="140">Details</th>\n            </tr>\n            <tr  *ngFor ="let data of tik_list_stat">\n                <td>{{data.title}}</td>\n                <td>\n                  <p>{{data.access_date | date:\'medium\'}}</p>\n                  \n                </td>\n                <td>\n                  <p>{{data.total_time|milisecondtotime}}</p>\n                  \n                </td>\n                <td><span class="circle">{{data.percentage_read}}%</span></td>\n                <!-- <td *ngIf="data.downloaded == false"><i class="fa fa-times grid-icon"></i></td> -->\n                        <td *ngIf="data.downloaded == true"><i class="fa fa-check" aria-hidden="true"></i>\n                        </td>\n                        <td>\n                          <span ng-if="data.company_geoloc_activated" popover-title="Location" popover-trigger="\'mouseenter\'" popover-placement="bottom" popover-append-to-body="true" uib-popover-template="\'views/modals/platformPopover.html\'" class="ng-binding ng-scope">\n              <i class="fa fa-desktop"></i>\n              n°1\n              </span><!-- https://api.tilkee.com/v2/projects/333761/connexions/1171867 end ngIf: row.company_geoloc_activated -->\n              <!-- ngIf: !(row.company_geoloc_activated) -->\n              <span>\n              <img ng-src="assets/imgs/linux.png" tooltip-append-to-body="true" uib-tooltip="Linux" style="height:24px; width:24px;" src="assets/imgs/linux.png">\n              <img ng-src="assets/imgs/chrome.png" tooltip-append-to-body="true" uib-tooltip="Chrome" style="height:24px; width:24px;" src="assets/imgs/chrome.png">\n              </span>\n                        </td> \n                        <td (click)="view_stat_details(data.id,projectname,data.access_date,data.total_time,data.title)">Show</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      </div></div>\n    </div>\n      <!-- <span tooltip="content to be shown in the tooltip"\n      [tooltipDisabled]="false"\n      [tooltipAnimation]="true"\n      tooltipPlacement="top">\n    element on which this tooltip is applied.\n</span> -->\n\n<ion-fab right bottom class="home-menu"> \n    <button ion-fab color="danger" (click)="got_to_home()"><ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon></button>\n  </ion-fab>\n  \n</ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/project-stat/project-stat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__["a" /* HelperService */]])
    ], ProjectStatPage);
    return ProjectStatPage;
}());

//# sourceMappingURL=project-stat.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MyAccountPage } from '../../pages/my-account/my-account';
//import {Md5} from 'ts-md5/dist/md5';
var HelperService = /** @class */ (function () {
    function HelperService(toastCtrl, loadingCtrl, alertCtrl, app) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
    }
    // create tost message 
    HelperService.prototype.sendalertmessage = function (position, message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: position
        });
        toast.present(toast);
    };
    // create image loading bar
    HelperService.prototype.createLoadingBar = function () {
        return this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/loader.gif" alt="">',
            dismissOnPageChange: false,
        });
    };
    // create msg loading bar
    HelperService.prototype.createLoadingBar_upload = function (msg) {
        console.log(msg);
        return this.loadingCtrl.create({
            spinner: 'hide',
            content: msg,
            dismissOnPageChange: false,
        });
    };
    // show alert msg
    HelperService.prototype.showConfirmAlert = function (titel, message) {
        var response;
        var alert = this.alertCtrl.create({
            title: titel,
            message: message,
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        alert.dismiss(false);
                        return false;
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        alert.dismiss(true);
                        return false;
                    }
                }
            ]
        });
        return alert;
    };
    // directly move to login page 
    HelperService.prototype.backtohome = function () {
        console.log("nav ctrl out side of page strture");
        localStorage.setItem("customerId", "");
        localStorage.setItem("customerEmail", "");
        localStorage.setItem("customerFirstName", "");
        localStorage.setItem("customerLastName", "");
        localStorage.setItem("customerProfilePic", "");
        localStorage.setItem("customerSessionId", "");
        localStorage.setItem('customerEnterprise', "");
        localStorage.setItem('customerPosition', "");
        localStorage.setItem('customerMobile', "");
        localStorage.setItem('customerPhone', "");
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    HelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], HelperService);
    return HelperService;
}());

//# sourceMappingURL=helper.service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_account_my_account__ = __webpack_require__(20);
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
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(globalservice, helperservice, navCtrl, navParams) {
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {
            'oldPassword': '',
            'newPassword': '',
            'confirmPassword': ''
        };
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.changepassword = function () {
        var _this = this;
        if (this.user.oldPassword == undefined || this.user.oldPassword == null || this.user.oldPassword == '') {
            this.helperservice.sendalertmessage('bottom', 'please enter your old password');
        }
        else if (this.user.oldPassword.length < 6) {
            this.helperservice.sendalertmessage('bottom', 'Password Must Minimum Six Charecter Long ');
        }
        else if (this.user.newPassword == undefined || this.user.newPassword == null || this.user.newPassword == '') {
            this.helperservice.sendalertmessage('bottom', 'please enter your new password ');
        }
        else if (this.user.newPassword.length < 6) {
            this.helperservice.sendalertmessage('bottom', 'New Password Must Minimum Six Charecter Long ');
        }
        else if (this.user.confirmPassword == undefined || this.user.confirmPassword == null || this.user.confirmPassword == '') {
            this.helperservice.sendalertmessage('bottom', 'please enter your confirm password ');
        }
        else if (this.user.confirmPassword != this.user.newPassword) {
            this.helperservice.sendalertmessage('bottom', ' confirm password does not match your new password ');
        }
        else {
            var objappVersion = navigator.appVersion;
            var objAgent = navigator.userAgent;
            var objbrowserName = navigator.appName;
            var objfullVersion = '' + parseFloat(navigator.appVersion);
            var objBrMajorVersion = parseInt(navigator.appVersion, 10);
            var objOffsetName, objOffsetVersion, ix;
            // In Chrome 
            if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
                objbrowserName = "Chrome";
                objfullVersion = objAgent.substring(objOffsetVersion + 7);
            }
            else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
                objbrowserName = "Microsoft Internet Explorer";
                objfullVersion = objAgent.substring(objOffsetVersion + 5);
            }
            else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
                objbrowserName = "Firefox";
            }
            else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
                objbrowserName = "Safari";
                objfullVersion = objAgent.substring(objOffsetVersion + 7);
                if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
                    objfullVersion = objAgent.substring(objOffsetVersion + 8);
            }
            else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) <
                (objOffsetVersion = objAgent.lastIndexOf('/'))) {
                objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
                objfullVersion = objAgent.substring(objOffsetVersion + 1);
                if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
                    objbrowserName = navigator.appName;
                }
            }
            // trimming the fullVersion string at semicolon/space if present
            if ((ix = objfullVersion.indexOf(";")) != -1)
                objfullVersion = objfullVersion.substring(0, ix);
            if ((ix = objfullVersion.indexOf(" ")) != -1)
                objfullVersion = objfullVersion.substring(0, ix);
            objBrMajorVersion = parseInt('' + objfullVersion, 10);
            if (isNaN(objBrMajorVersion)) {
                objfullVersion = '' + parseFloat(navigator.appVersion);
                objBrMajorVersion = parseInt(navigator.appVersion, 10);
            }
            //  let txt1 = 'Browser name = '+objbrowserName+'<br>'
            //  +'Full version  = '+objfullVersion+'<br>'
            //  +'Major version = '+objBrMajorVersion+'<br>'
            //  +'navigator.appName = '+navigator.appName+'<br>'
            //  +'navigator.userAgent = '+navigator.userAgent+'<br>'
            // ;
            this.osversion = objbrowserName + "_" + objfullVersion;
            var change_password = {
                'locale': 'eng',
                'os': 'Web',
                'osVersion': this.osversion,
                'appVersion': "1.0",
                'sessionId': localStorage.getItem("customerSessionId"),
                'customerId': localStorage.getItem("customerId"),
                'oldPassword': this.user.oldPassword,
                'newPassword': this.user.newPassword,
                'confirmPassword': this.user.confirmPassword,
            };
            var loadingPop_1 = this.helperservice.createLoadingBar();
            loadingPop_1.present();
            this.globalservice.changepassworddata(change_password).subscribe(function (resp) {
                loadingPop_1.dismiss();
                console.log(resp);
                if (resp.responseStatus.STATUS == "SUCCESS") {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__my_account_my_account__["a" /* MyAccountPage */]);
                }
                else {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
            }, function (err) {
                loadingPop_1.dismiss();
                _this.helperservice.sendalertmessage("bottom", "something went wrong!Please try again.");
            });
        }
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-password',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/change-password/change-password.html"*/'<!--\n  Generated template for the ChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="container">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <div class="login-page-wrapper">\n             <!-- <h2>Want to Change your password ?</h2> -->\n            </div>\n            <div class="log-in-form-cont">\n              <ion-list>\n                <ion-item>\n                  <ion-input type="password" name="oldPassword" [(ngModel)]="user.oldPassword" placeholder="Enter your old password "></ion-input>\n                  <ion-label class="lock-icon-wrap"><img src="assets/imgs/lock.png" alt=""></ion-label> \n                </ion-item>\n                <ion-item>\n                  <ion-input type="password" name="newPassword" [(ngModel)]="user.newPassword" placeholder="Enter your new password "></ion-input>\n                  <ion-label class="lock-icon-wrap"><img src="assets/imgs/lock.png" alt=""></ion-label> \n                </ion-item>\n                <ion-item>\n                  <ion-input type="password" name="confirmPassword" [(ngModel)]="user.confirmPassword" placeholder="Enter your Confirm password "></ion-input>\n                  <ion-label class="lock-icon-wrap"><img src="assets/imgs/lock.png" alt=""></ion-label> \n                </ion-item>\n                \n              </ion-list>\n              <div class="log-in-bt" (click)="changepassword()">\n                Change password\n              </div>\n             \n            \n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <!-- <button ion-button secondary menuToggle>Toggle Menu</button>  -->\n    <ion-fab right bottom class="home-menu"> \n      <button ion-fab color="danger"(click)="got_to_home()"><ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon></button>\n    </ion-fab>\n  </ion-content>'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApitwoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';

var API_BASE_URL = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].API_BASE_URL;
var TILKEE_BASE_URL = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].TILKEE_BASE_URL;
var CAMCARD_BASE_URL = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].CAMCARD_BASE_URL;
var HUNTER_BASE_URL = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].HUNTER_BASE_URL;
var LUSHA_BASE_URL = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].LUSHA_BASE_URL;
//export interface Payload { }
var ApitwoService = /** @class */ (function () {
    function ApitwoService(http) {
        this.http = http;
        this.tilkee_registartion_email = "";
    }
    ApitwoService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ApitwoService.prototype.setApiEndpoint = function (route) {
        this.endPoint = API_BASE_URL + "/" + route;
    };
    ApitwoService.prototype.getApiEndPoint = function () {
        return this.endPoint;
    };
    ApitwoService.prototype.getDefaultHeaders = function () {
        var defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        });
        return defaultHeaders;
    };
    // for tilkee 
    ApitwoService.prototype.setTilkeeEndpoint = function (route) {
        this.endtPoint = TILKEE_BASE_URL + "/" + route;
    };
    ApitwoService.prototype.getTilkeeEndPoint = function () {
        return this.endtPoint;
    };
    // for camcard
    ApitwoService.prototype.setCamcardEndpoint = function (route) {
        this.endcPoint = CAMCARD_BASE_URL + "/" + route;
    };
    ApitwoService.prototype.getCamcardEndPoint = function () {
        return this.endcPoint;
    };
    // for hunter
    ApitwoService.prototype.setHunterEndpoint = function (route) {
        this.endhPoint = HUNTER_BASE_URL + "/" + route;
    };
    ApitwoService.prototype.getHunterEndPoint = function () {
        return this.endhPoint;
    };
    // for lusha
    ApitwoService.prototype.setLushaEndpoint = function (route) {
        this.endlPoint = LUSHA_BASE_URL + "/" + route;
    };
    ApitwoService.prototype.getLushaEndPoint = function () {
        return this.endlPoint;
    };
    ApitwoService.prototype.getLushaDefaultHeaders = function () {
        var defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'api_key': '802484646f648fb5030ab214348cb537'
        });
        return defaultHeaders;
    };
    ApitwoService.prototype.getCamcardDefaultHeaders = function () {
        var defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'cache-control': 'no-cache'
        });
        return defaultHeaders;
    };
    ApitwoService.prototype.getTilkeeDefaultHeaders = function () {
        if (localStorage.getItem("customerEmail") == "" || localStorage.getItem("customerEmail") == "" || localStorage.getItem("customerEmail") == undefined) {
            this.tilkee_registartion_email = "hello@ley-valy.com";
        }
        else {
            this.tilkee_registartion_email = localStorage.getItem("customerEmail");
        }
        var defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip, deflate, compress',
            'Authorization': 'Bearer c9925f845f0e0a2ec4d0f74f51007f9ed7ebbee79ba8d8304eae775e2df0739a',
            'x-tilk-ref': 'ley-valy',
            'USER_EMAIL': this.tilkee_registartion_email,
            'content-type': 'application/json'
        });
        return defaultHeaders;
    };
    ApitwoService.prototype.post_genreral = function (route, paramsPayload) {
        //console.log("hurray its worked fine !");
        this.setApiEndpoint(route);
        var urlSearchParams = new URLSearchParams();
        var paylod = JSON.parse(paramsPayload);
        for (var key in paylod)
            urlSearchParams.append(key, paylod[key]);
        var body = urlSearchParams.toString();
        this.setApiEndpoint(route);
        console.log(this.getApiEndPoint());
        console.log(body);
        //console.log(this.getDefaultHeaders());
        var httpRequestOptions = { headers: this.getDefaultHeaders() };
        return this.http.post(this.getApiEndPoint(), body, httpRequestOptions).catch(this.handleError);
    };
    ApitwoService.prototype.add_user_in_tilkee = function (route, paramsPayload) {
        var paylod = JSON.parse(paramsPayload);
        var testjson = {
            "first_name": paylod['customerFirstName'],
            "last_name": paylod['customerLastName'],
            "email": paylod['customerEmail'],
            // "company_attributes":paylod['customerEnterprise']
            "company_attributes": {
                "name": "",
                "cgvs": ""
            }
        };
        this.setTilkeeEndpoint(route);
        var httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
        return this.http.post(this.getTilkeeEndPoint(), testjson, httpRequestOptions).catch(this.handleError);
    };
    ApitwoService.prototype.apps_tilkee = function (route, paramsPayload) {
        var paylod = JSON.parse(paramsPayload);
        var projectname = paylod['name'];
        var archived_at = paylod['archived_at'];
        var stringValue = paylod['can_be_downloaded'];
        var externalid = paylod['external_id'];
        var boolValue = (stringValue == "true");
        var duration = parseInt(paylod['duration']);
        var testjson = {
            "name": projectname,
            "archived_at": archived_at,
            "can_be_downloaded": boolValue,
            "external_id": externalid,
            "duration": duration
        };
        this.setTilkeeEndpoint(route);
        var httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
        return this.http.post(this.getTilkeeEndPoint(), testjson, httpRequestOptions).catch(this.handleError);
    };
    ApitwoService.prototype.list_project_tilkee = function (route, data) {
        this.setTilkeeEndpoint(route);
        var httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
        console.log(this.getTilkeeEndPoint());
        var tokenstring = "";
        if (data == '1') {
            tokenstring = 'tokens?consulted=true';
        }
        if (data == '0') {
            tokenstring = 'tokens?consultable=false&nb_connections=0&interest=0';
        }
        return this.http.get(this.getTilkeeEndPoint() + tokenstring, httpRequestOptions).catch(this.handleError);
    };
    ApitwoService.prototype.list_tilkee = function (route) {
        this.setTilkeeEndpoint(route);
        var httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
        console.log(this.getTilkeeEndPoint());
        return this.http.get(this.getTilkeeEndPoint(), httpRequestOptions).catch(this.handleError);
    };
    ApitwoService.prototype.serachtilkee = function (route, projectid, searchname) {
        this.setTilkeeEndpoint(route);
        var httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
        return this.http.get(this.getTilkeeEndPoint() + '/' + projectid + '/' + 'tokens?search=' + searchname, httpRequestOptions).catch(this.handleError);
    };
    ApitwoService.prototype.detailsofaconnection = function (route, projectid, id_connexion) {
        this.setTilkeeEndpoint(route);
        ///:project_id/connexions/:id_connexion/
        var httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
        return this.http.get(this.getTilkeeEndPoint() + '/' + projectid + '/' + 'connexions/' + id_connexion, httpRequestOptions).catch(this.handleError);
    };
    ApitwoService.prototype.statsofaproject = function (route, projectid) {
        this.setTilkeeEndpoint(route);
        var httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
        return this.http.get(this.getTilkeeEndPoint() + '/' + projectid + '/' + 'stats/', httpRequestOptions).catch(this.handleError);
    };
    ApitwoService.prototype.add_file_tilkee = function (route, paramsPayload) {
        var paylod = paramsPayload;
        // console.log(paylod);
        this.setTilkeeEndpoint(route);
        var httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
        return this.http.post(this.getTilkeeEndPoint(), paylod, httpRequestOptions).catch(this.handleError);
    };
    ApitwoService.prototype.add_file_to_project = function (route, paramsPayload) {
        var paylod = paramsPayload;
        // console.log(paylod);
        var linkfiledata = {
            "items": [{
                    "id": paylod['file_id'],
                    "signable": false,
                    "title": paylod['title']
                }]
        };
        this.setTilkeeEndpoint(route);
        console.log(this.setTilkeeEndpoint(route));
        var httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
        return this.http.post(this.getTilkeeEndPoint(), linkfiledata, httpRequestOptions).catch(this.handleError);
    };
    ApitwoService.prototype.generatelinks = function (route, paramsPayload) {
        var paylod = paramsPayload;
        // console.log(paylod);
        this.setTilkeeEndpoint(route);
        //  console.log(this.setTilkeeEndpoint(route));
        var httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
        return this.http.post(this.getTilkeeEndPoint(), paylod, httpRequestOptions).catch(this.handleError);
    };
    ApitwoService.prototype.camcardresponse = function (route, paramsPayload) {
        var uploadData = new FormData();
        uploadData.append('myFile', paramsPayload, paramsPayload.name);
        console.log(uploadData);
        var url = "https://bcr1.intsig.net/BCRService/BCR_VCF2?user=rajesh@rpigroup.com&pass=AQ6TRHJ3PCMBCPGQ&lang=1&json=1";
        //let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        //let options       = new RequestOptions({ headers: headers });
        // this.setCamcardEndpoint(route);
        var httpRequestOptions = { headers: this.getCamcardDefaultHeaders() };
        //   console.log(httpRequestOptions);
        return this.http.post(url, uploadData).catch(this.handleError);
    };
    ApitwoService.prototype.hunterresponse = function (route, paramsPayload) {
        var paylod = JSON.parse(paramsPayload);
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('domain', paylod['domain']).set('api_key', 'db2cbd3570a277bb707ff455d9cb30ef611c4e27').set('last_name', paylod['last_name']).set('first_name', paylod['first_name']);
        this.setHunterEndpoint(route);
        //https://api.hunter.io/v2/email-finder?domain=rpigroup.com&first_name=rajesh&last_name=dalmia&api_key=db2cbd3570a277bb707ff455d9cb30ef611c4e27
        console.log(params.toString());
        console.log(this.getHunterEndPoint());
        return this.http.get(this.getHunterEndPoint(), { params: params }).catch(this.handleError);
    };
    ApitwoService.prototype.lusharesponse = function (route, paramsPayload) {
        this.setLushaEndpoint(route);
        //.set('api_key', 'db2cbd3570a277bb707ff455d9cb30ef611c4e27').
        var paylod = JSON.parse(paramsPayload);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set("api_key", "802484646f648fb5030ab214348cb537").set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE").set("Access-Control-Allow-Credentials", "true");
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('firstName', paylod['first_name']).set('lastName', paylod['last_name']).set('company', paylod['domain']);
        return this.http.get(this.getLushaEndPoint(), { headers: headers, params: params }).catch(this.handleError);
    };
    ApitwoService.prototype.tilkee_directupload = function (route, paramsPayload, titel) {
        console.log(paramsPayload);
        this.setTilkeeEndpoint(route);
        var httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
        //  console.log(this.setTilkeeEndpoint(route));
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('filename', titel + '.' + paramsPayload);
        // console.log(params);
        //console.log(this.getTilkeeEndPoint());
        return this.http.get(this.getTilkeeEndPoint(), { headers: this.getTilkeeDefaultHeaders(), params: params }).catch(this.handleError);
    };
    ApitwoService.prototype.tilkee_directupload_parttwo = function (filePayload, paramspayload) {
        console.log(filePayload);
        console.log(paramspayload);
        var uploadData = new FormData();
        uploadData.append('key', paramspayload.key);
        uploadData.append('acl', paramspayload.acl);
        uploadData.append('policy', paramspayload.policy);
        uploadData.append('Signature', paramspayload.signature);
        uploadData.append('AWSAccessKeyId', paramspayload.AWSAccessKeyId);
        uploadData.append('success_action_status', "201");
        uploadData.append('file', filePayload, filePayload.name);
        return this.http.post("https://datatlk.tilkee.com", uploadData, { responseType: 'text' }).catch(this.handleError);
        // this.setTilkeeEndpoint(route);
        // let uploadcontent = [{
        //                         "name": "my new file",
        //                         "from_url": true,
        //                         "s3_url": "https://datatlk.s3.amazonaws.com/b25c3fe62390%2Fcompanies%2F17323%2Fuploads%2Fd69e85500c12-reactjs_tutorial.pdf",
        //                         "type": "file",
        //                         "external_id": "external_id"
        //   }]
        //   let httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
        //   console.log(uploadcontent);
        //   console.log(this.getTilkeeEndPoint());
        // return this.http.post(this.getTilkeeEndPoint(),uploadcontent, httpRequestOptions).catch(this.handleError);
    };
    ApitwoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApitwoService);
    return ApitwoService;
}());

//# sourceMappingURL=apitwo.service.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalValueProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_apitwo_service__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalValueProvider = /** @class */ (function () {
    function GlobalValueProvider(apiservice) {
        this.apiservice = apiservice;
        //console.log('Hello GlobalValueProvider Provider');
    }
    GlobalValueProvider.prototype.siginup = function (data) {
        var api_url = "customerRegistration";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.signup_in_tilkee = function (data) {
        var api_url = "users";
        return this.apiservice.add_user_in_tilkee(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.signin = function (data) {
        var api_url = "customerLogin";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.customersociallogin = function (data) {
        var api_url = "customerSocialLogin";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.forgotpassworddata = function (data) {
        var api_url = "customerForgotPassword";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.changepassworddata = function (data) {
        var api_url = "customerChangePassword";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.update_profile = function (data) {
        var api_url = "customerUpdateProfile";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.addproject = function (data) {
        var api_url = "projects";
        return this.apiservice.apps_tilkee(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.listproject = function (data) {
        var api_url = "";
        return this.apiservice.list_project_tilkee(api_url, data);
    };
    GlobalValueProvider.prototype.listtilk = function (projectid) {
        var api_url = "projects/" + projectid + "/tokens";
        return this.apiservice.list_tilkee(api_url);
    };
    GlobalValueProvider.prototype.listtilkeestat = function (projectid) {
        var api_url = "projects/" + projectid + "/connexions";
        return this.apiservice.list_tilkee(api_url);
    };
    GlobalValueProvider.prototype.listtilkstat = function (projectid) {
        var api_url = "projects/" + projectid + "/tokens";
        return this.apiservice.list_tilkee(api_url);
    };
    GlobalValueProvider.prototype.statsofaproject = function (projectid) {
        var api_url = "projects/" + projectid + "/stats?tokens=";
        return this.apiservice.list_tilkee(api_url);
    };
    GlobalValueProvider.prototype.addfile = function (data) {
        var api_url = "items";
        return this.apiservice.add_file_tilkee(api_url, data);
    };
    GlobalValueProvider.prototype.addfiletoproject = function (data) {
        data['project_id'];
        var api_url = "projects/" + data['project_id'] + "/add_items";
        return this.apiservice.add_file_to_project(api_url, data);
    };
    GlobalValueProvider.prototype.generatelink = function (data, projectid) {
        var api_url = "/projects/" + projectid + "/tokens";
        return this.apiservice.generatelinks(api_url, data);
    };
    GlobalValueProvider.prototype.detailsofaconnection = function (project_id, id_connexion) {
        var api_url = "projects";
        return this.apiservice.detailsofaconnection(api_url, project_id, id_connexion);
    };
    // camacrd oriented api 
    GlobalValueProvider.prototype.add_bisnes_card = function (data) {
        var api_url = "addEditBusinessCard";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.list_bisnes_card = function (data) {
        var api_url = "businessCardList";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.search_bisnes_card = function (data) {
        var api_url = "searchBusinessCardDetails";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.get_card_details = function (data) {
        var api_url = "cardDetails";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.camcarddata = function (data) {
        var api_url = "BCR_VCF2?user=rajesh@rpigroup.com&pass=AQ6TRHJ3PCMBCPGQ&lang=1&json=1&size=632249";
        return this.apiservice.camcardresponse(api_url, data);
    };
    GlobalValueProvider.prototype.tilk_creted_search = function (projectid, searchname) {
        var api_url = "projects";
        return this.apiservice.serachtilkee(api_url, projectid, searchname);
    };
    GlobalValueProvider.prototype.add_tilkee_Project_Details_localserver = function (data) {
        var api_url = "addProjectDetails";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    // hunter and lusha oriented api
    GlobalValueProvider.prototype.search_hunter_contact = function (data) {
        var api_url = "email-finder";
        return this.apiservice.hunterresponse(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.search_lusha_contact = function (data) {
        var api_url = "person";
        return this.apiservice.lusharesponse(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.delete_card = function (data) {
        var api_url = "deleteBusinessCard";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.sendurltocustomer = function (data) {
        var api_url = "sendProjectLink";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.callcamcardapi = function (data) {
        var api_url = "callCamCardAPI";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.calllushaandhunter = function (data) {
        var api_url = "callLushaHunterAPI";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.calllogout = function (data) {
        var api_url = "customerLogout";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.tilkeedirectupload = function (data, titel) {
        var api_url = "direct_upload_data";
        console.log("data" + titel + data);
        return this.apiservice.tilkee_directupload(api_url, data, titel);
    };
    //  datadirectupload(file,resp)
    //  {
    //   let api_url ="items";
    //   return this.apiservice.tilkee_directupload_parttwo(api_url,file,resp);
    //  }
    GlobalValueProvider.prototype.uploaddata_intoamazonserver = function (file, resp) {
        return this.apiservice.tilkee_directupload_parttwo(file, resp);
    };
    // <!------#five satge api #------------->
    GlobalValueProvider.prototype.getsubscriptionslanlist = function (data) {
        var api_url = "getSubscriptionPlanList";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider.prototype.subscriptionplanselect = function (data) {
        var api_url = "userPlanSelection";
        return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    };
    GlobalValueProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_apitwo_service__["a" /* ApitwoService */]])
    ], GlobalValueProvider);
    return GlobalValueProvider;
}());

//# sourceMappingURL=global-value.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TilkStatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__ = __webpack_require__(17);
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

/**
 * Generated class for the TilkStatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TilkStatPage = /** @class */ (function () {
    function TilkStatPage(viewCtrl, globalservice, helperservice, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projectid = navParams.get('projectid');
        this.id_tilk = navParams.get('id_connexion');
        this.projectname = navParams.get('projectname');
        this.pdate = navParams.get('pdate');
        this.stime = navParams.get('stime');
        this.titel = navParams.get('titel');
    }
    TilkStatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.globalservice.detailsofaconnection(this.projectid, this.id_tilk).subscribe(function (response) {
            _this.tik_list_stat = response.contents;
            console.log(_this.titel);
            console.log(_this.projectname);
            console.log(_this.stime);
            console.log(_this.pdate);
            console.log(response);
        }, function (error) {
        });
        // this.globalservice. statsofaproject(this.projectid).subscribe(
        //   (response_two)=>{
        //     console.log(response_two)
        //     this.tik_list_stat_two =response_two.contents;
        //     console.log('statsofaproject');
        //     console.log(this.tik_list_stat_two);
        //   },
        //   (error_two)=>{
        //   }
        // );
    };
    TilkStatPage.prototype.ionViewDidLoad = function () {
        // this.setBackButtonAction();
        console.log('ionViewDidLoad TilkStatPage');
    };
    TilkStatPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */])
    ], TilkStatPage.prototype, "navBar", void 0);
    TilkStatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tilk-stat',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/tilk-stat/tilk-stat.html"*/'<!--\n  Generated template for the TilkStatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Temps de lecture</ion-title>\n    <!-- <button  (click)="dismiss()" class="canc-bt">Cancel <ion-icon name="md-close" showWhen="android,windows"></ion-icon></button> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="container">\n     \n        <div class="bussiness-card-top-box">\n            <div class="upper_block">\n                <ul>\n                  <li><b>Project name:</b> <span>{{projectname}}</span></li>\n                  <li><b>Date of access:</b> <span>{{pdate | date:\'medium\'}}</span></li>\n                  <li><b>Contact name:</b> <span>{{titel}}</span></li>\n                  <li><b>Duration:</b> <span>{{stime | milisecondtotime}}</span></li>\n                </ul>\n        \n              </div>\n        <ion-grid no-padding>\n            <ion-row>\n\n                <ion-col col-12>\n                  <div class="bussiness-table-wrap">\n                    <table class="bussiness-table">\n                      <thead>\n                          <tr>\n                              <th >Date</th>\n                              <th >Document</th>\n                              <!-- <th >Reading time</th> -->\n                              <th>Temps de lecture</th> \n                              <!-- <th >SHOW</th> -->\n                              \n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor ="let data of tik_list_stat">\n                            \n                              <td>{{data.created_at | date: \'medium\'  }}</td>\n                              <!-- <td>{{data.totaltime | date:\'mmss\' }}</td> -->\n                              <td *ngIf="data.title==\'\'">\n                              {{data.item.title}} \n\n                              <div *ngIf="data.pages!=undefined">\n                                  <p *ngFor ="let pagedetails of data.pages">\n                                      <span >page: {{pagedetails.page}}</span>\n                                  </p>\n                              </div>\n                              \n                            </td>\n\n                             <td *ngIf="data.title != \'\' "\n                            >\n                           <b>{{data.title}}</b> \n                            <div *ngIf="data.pages!=undefined">\n                                <p *ngFor ="let pagedetails of data.pages">\n                                    <span >page: {{pagedetails.page}}</span>\n                                </p>\n                            </div>\n                            \n                          </td> \n                          <!-- <td *ngIf="data.doc_name != \'\' " >\n                         \n                          {{data.doc_name}}\n                        </td>  -->\n                          \n                              <!-- <td>{{data.total_time | date:\'SSS\'}}</td> -->\n                                \n                              <td> \n                                 <b>{{data.total_time | milisecondtotime}}</b> \n                              \n                                  <div *ngIf="data.pages!=undefined">\n                                      <p *ngFor ="let pagedetails of data.pages">\n                                          <span >{{pagedetails.time | milisecondtotime}}</span>\n                                      </p>\n                                  </div>\n                                 \n                                \n                              \n                              </td>\n                               \n                              <!-- <td><a target="_blank" href="file://{{data.content_url}}"></a>Show</td>  -->\n                            </tr>\n                      </tbody>\n                  \n                    </table>\n                  </div>\n                </ion-col>\n              </ion-row>\n                  </ion-grid>\n                </div>\n                  </div>\n    <!-- <ion-tags-input [(ngModel)]="tags" (onChange)="onChange($event)"></ion-tags-input> -->\n  \n  </ion-content>\n\n\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/tilk-stat/tilk-stat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], TilkStatPage);
    return TilkStatPage;
}());

//# sourceMappingURL=tilk-stat.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BussinesscardAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bussinesscard_bussinesscard__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_image_compress__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_image_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_account_my_account__ = __webpack_require__(20);
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
 * Generated class for the BussinesscardAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BussinesscardAddPage = /** @class */ (function () {
    function BussinesscardAddPage(helperservice, globalservice, alertCtrl, navCtrl, navParams) {
        this.helperservice = helperservice;
        this.globalservice = globalservice;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgData = [];
        this.imgDataView = [];
        this.base64textString = "";
        this.image_name = "";
        this.image_ext = "";
        this.showTitle = false;
        this.user = {
            'firstName': '',
            'lastName': '',
            'company': '',
            'position': '',
            'mobile': '',
            'phone': '',
            'email': '',
            'remarks': ''
        };
    }
    BussinesscardAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BussinesscardAddPage');
        var objAgent = navigator.userAgent;
        var objbrowserName = navigator.appName;
        var objfullVersion = '' + parseFloat(navigator.appVersion);
        var objBrMajorVersion = parseInt(navigator.appVersion, 10);
        var objOffsetName, objOffsetVersion, ix;
        // In Chrome 
        if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
            objbrowserName = "Chrome";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
        }
        else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
            objbrowserName = "Microsoft Internet Explorer";
            objfullVersion = objAgent.substring(objOffsetVersion + 5);
        }
        else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
            objbrowserName = "Firefox";
        }
        else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
            objbrowserName = "Safari";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
            if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
                objfullVersion = objAgent.substring(objOffsetVersion + 8);
        }
        else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) <
            (objOffsetVersion = objAgent.lastIndexOf('/'))) {
            objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
            objfullVersion = objAgent.substring(objOffsetVersion + 1);
            if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
                objbrowserName = navigator.appName;
            }
        }
        // trimming the fullVersion string at semicolon/space if present
        if ((ix = objfullVersion.indexOf(";")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        if ((ix = objfullVersion.indexOf(" ")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        objBrMajorVersion = parseInt('' + objfullVersion, 10);
        if (isNaN(objBrMajorVersion)) {
            objfullVersion = '' + parseFloat(navigator.appVersion);
            objBrMajorVersion = parseInt(navigator.appVersion, 10);
        }
        this.osversion = objbrowserName + "_" + objfullVersion;
    };
    // go to buisnes card list page 
    BussinesscardAddPage.prototype.back_to_list = function () {
        this.navCtrl.pop();
    };
    BussinesscardAddPage.prototype.onFileChanged = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        var fileList;
        var images = [];
        __WEBPACK_IMPORTED_MODULE_5_ng2_image_compress__["ImageCompressService"].filesToCompressedImageSource(event.target.files).then(function (observableImages) {
            observableImages.subscribe(function (image) {
                images.push(image);
            }, function (error) {
                console.log("Error while converting");
            }, function () {
                _this.processedImages = images;
                console.log("modifiedimage :");
                console.log(_this.processedImages);
                var str = _this.processedImages[0].compressedImage.imageDataUrl;
                var ix = str.indexOf(",");
                var objfullVersion = str.substring(ix + 1);
                console.log(objfullVersion);
                _this.image_name = objfullVersion;
                _this.base64textString = _this.processedImages[0].compressedImage.imageDataUrl;
                _this.showTitle = true;
            });
        });
        // console.log(this.selectedFile) processedImages image_name showTitle image_ext
        var image_name = this.selectedFile.name;
        var res_img = image_name.split(".");
        this.image_ext = res_img[1];
        // console.log(this.image_ext);
        var files = event.target.files;
    };
    // crete new card 
    BussinesscardAddPage.prototype.add_new_card = function () {
        var _this = this;
        if (this.user.firstName == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your first name');
        }
        else if (this.user.lastName == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your last name');
        }
        else if (this.user.email == undefined || this.user.email == null || this.user.email == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your email');
        }
        else if (!new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.user.email)) {
            this.helperservice.sendalertmessage('bottom', 'Please enter proper email ');
        }
        else {
            var loadingPop_1 = this.helperservice.createLoadingBar();
            loadingPop_1.present();
            var add_card = {
                'locale': 'en',
                'firstName': this.user.firstName,
                'lastName': this.user.lastName,
                'email': this.user.email,
                'mobile': this.user.phone,
                'phone': this.user.phone,
                'sessionId': localStorage.getItem('customerSessionId'),
                'company': this.user.company,
                'os': 'Web',
                'position': this.user.position,
                'cardPic': this.image_name,
                'cardPicExt': this.image_ext,
                'osVersion': this.osversion,
                'appVersion': '1.0',
                'customerId': localStorage.getItem("customerId"),
                'jsonResponse': '{}',
                'cardId': '',
                'caller': 'General',
                'remarks': this.user.remarks
            };
            console.log(add_card);
            this.globalservice.add_bisnes_card(add_card).subscribe(function (resp) {
                loadingPop_1.dismiss();
                console.log(resp);
                // this.navCtrl.push(HomePage);
                if (resp.responseStatus.STATUS == "SUCCESS") {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bussinesscard_bussinesscard__["a" /* BussinesscardPage */]);
                }
                else {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
            }, function (err) {
                _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
            });
        }
    };
    // GO TO DASHBOARD PAGE
    BussinesscardAddPage.prototype.got_to_home = function () {
        console.log("dsds");
        var index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__my_account_my_account__["a" /* MyAccountPage */]);
    };
    BussinesscardAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bussinesscard-add',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/bussinesscard-add/bussinesscard-add.html"*/'<!--\n  Generated template for the BussinesscardAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation .\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> Add business card  </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <div class="container">\n    <div class="edit_box">\n      <div class="form_area">\n    \n          <ion-list>\n            \n            <input style="display: none"  type="file" (change)="onFileChanged($event)" #fileInput> \n            <button (click)="fileInput.click()">Select File</button>\n            \n            <button (click)="upload_img()"  class="log-in-bt" >Upload!</button>\n            \n          \n          \n             \n          </ion-list>\n         \n         \n          <div class="btn_area">\n           \n            <button ion-button class="delete-bt" type="button" (click)="back_to_list()" >Cancel</button>\n          </div>\n       {{camcardresp}}\n      </div>\n    </div>\n  </div> -->\n\n  <div class="container">\n    <div class="container">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div class="profile-image-wrap">\n              <div class="profile-pic">\n                  <div *ngIf="base64textString !=\'\'" >\n                      \n                        <img src="{{base64textString}}" alt="">\n                      </div>\n                      <div *ngIf="base64textString ==\'\'" >\n                        \n                        <img  src="assets/imgs/card_profile_img.png" alt="">\n                        </div>\n                  \n\n                  <input style="display: none"  type="file" accept="image/*" (change)="onFileChanged($event)" #fileInput>\n                <span (click)="fileInput.click()" style="cursor: pointer;"> <ion-icon ios="md-create" md="md-create"></ion-icon></span>\n              </div>\n            </div>\n            <div class="profile-form-wrap">\n              <ion-list>\n                  <div class="static_col">\n                    <ion-item>\n                      <ion-input type="text" name="customerFirstName" placeholder="First name" [(ngModel)]="user.firstName"></ion-input>\n                      <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n                    </ion-item>\n                  </div>\n                  <div class="static_col">\n                    <ion-item>\n                      <ion-input type="text" name="customerLastName" placeholder="Last name" [(ngModel)]="user.lastName"></ion-input>\n                      <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n                    </ion-item>\n                  </div>\n                  <div class="static_col">\n                    <ion-item>\n                      <ion-input type="email" name="customerEmail" placeholder="Email" [(ngModel)]="user.email"></ion-input>\n                      <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-6.png" alt=""></ion-label>\n                    </ion-item>\n                  </div>\n                  <div class="static_col">\n                    <ion-item>\n                      <ion-input type="text" name="company" placeholder="Company" [(ngModel)]="user.company"></ion-input>\n                      <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-2.png" alt=""></ion-label>\n                    </ion-item>\n                  </div>\n                  <!-- <div class="static_col">\n                    <ion-item>\n                      <ion-input type="text" value="Logo enterprise"> </ion-input>\n                      <ion-label class="mail-icon-wrap"><img src="assets/imgs/lock.png" alt=""></ion-label>\n                    </ion-item>\n                  </div> -->\n                  <div class="static_col">\n                    <ion-item>\n                      <ion-input name="customerPosition" placeholder="Position" [(ngModel)]="user.position"></ion-input>\n                      <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-3.png" alt=""></ion-label>\n                    </ion-item>\n                  </div>\n                  <div class="static_col">\n                    <ion-item>\n                      <ion-input type="number" name="customerMobile" placeholder="Mobile" [(ngModel)]="user.mobile"></ion-input>\n                      <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-4.png" alt=""></ion-label>\n                    </ion-item>\n                  </div>\n                  <div class="static_col">\n                    <ion-item>\n                      <ion-input  type="number" name="customerPhone" placeholder="Phone" [(ngModel)]="user.phone"></ion-input>\n                      <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-5.png" alt=""></ion-label>\n                    </ion-item>\n                  </div>\n                  <div class="static_col">\n                    <ion-item class="texta">\n                        <ion-textarea style="resize: none;" name="remarks" [(ngModel)]="user.remarks" placeholder="Remarks" ></ion-textarea>\n                      <ion-label class="address-icon-wrap"><img src="assets/imgs/address.png" alt=""></ion-label>\n                    </ion-item>\n                  </div>\n                  <div class="static_col" style="display: none;">\n                    <ion-item><ion-input name="customerPosition"  placeholder="Position" ></ion-input></ion-item>\n                  </div>\n                </ion-list>\n                \n              <button ion-button class="log-in-bt" (click)="add_new_card()" type="submit">Add</button>\n            </div>\n          </ion-col>  \n        </ion-row>\n      </ion-grid>\n  \n    </div>\n  </div>\n  <ion-fab right bottom class="home-menu"> \n    <button ion-fab color="danger" (click)="got_to_home()"><ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/bussinesscard-add/bussinesscard-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], BussinesscardAddPage);
    return BussinesscardAddPage;
}());

//# sourceMappingURL=bussinesscard-add.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bussinesscard_bussinesscard__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_account_my_account__ = __webpack_require__(20);
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
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(helperservice, globalservice, navCtrl, navParams) {
        this.helperservice = helperservice;
        this.globalservice = globalservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {
            'first_name': '',
            'last_name': '',
            'domain': ''
        };
        this.hunter = {
            'first_name': '',
            'last_name': '',
            'linkedin_url': '',
            'email': '',
            'status': '',
            'domain': ''
        };
        this.lusha = {
            'first_name': '',
            'last_name': '',
            'linkedin_url': '',
            'email': '',
            'status': '',
            'domain': ''
        };
        console.log(this.lusha.status);
        console.log(this.hunter.status);
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
        var objAgent = navigator.userAgent;
        var objbrowserName = navigator.appName;
        var objfullVersion = '' + parseFloat(navigator.appVersion);
        var objBrMajorVersion = parseInt(navigator.appVersion, 10);
        var objOffsetName, objOffsetVersion, ix;
        // In Chrome 
        if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
            objbrowserName = "Chrome";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
        }
        else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
            objbrowserName = "Microsoft Internet Explorer";
            objfullVersion = objAgent.substring(objOffsetVersion + 5);
        }
        else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
            objbrowserName = "Firefox";
        }
        else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
            objbrowserName = "Safari";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
            if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
                objfullVersion = objAgent.substring(objOffsetVersion + 8);
        }
        else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) <
            (objOffsetVersion = objAgent.lastIndexOf('/'))) {
            objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
            objfullVersion = objAgent.substring(objOffsetVersion + 1);
            if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
                objbrowserName = navigator.appName;
            }
        }
        // trimming the fullVersion string at semicolon/space if present
        if ((ix = objfullVersion.indexOf(";")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        if ((ix = objfullVersion.indexOf(" ")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        objBrMajorVersion = parseInt('' + objfullVersion, 10);
        if (isNaN(objBrMajorVersion)) {
            objfullVersion = '' + parseFloat(navigator.appVersion);
            objBrMajorVersion = parseInt(navigator.appVersion, 10);
        }
        this.osversion = objbrowserName + "_" + objfullVersion;
    };
    // SEARCH CONTACT DETAILS 
    ContactPage.prototype.search_contact = function () {
        var _this = this;
        if (this.user.first_name == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your first name');
        }
        else if (this.user.last_name == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your last name');
        }
        else if (this.user.domain == undefined || this.user.domain == null || this.user.domain == '') {
            this.helperservice.sendalertmessage('bottom', 'Please provide domain name');
        }
        else {
            var loadingPop_1 = this.helperservice.createLoadingBar();
            loadingPop_1.present();
            var searchoption = {
                'locale': 'eng',
                'deviceId': localStorage.getItem('deviceId'),
                'os': 'Web',
                'osVersion': localStorage.getItem('osVersion'),
                'appVersion': '1.0',
                'customerId': localStorage.getItem('customerId'),
                'sessionId': localStorage.getItem('customerSessionId'),
                'firstName': this.user.first_name,
                'lastName': this.user.last_name,
                'domainName': this.user.domain
            };
            console.log(searchoption);
            this.globalservice.calllushaandhunter(searchoption).subscribe(function (resp) {
                loadingPop_1.dismiss();
                if (resp.responseStatus.STATUS == 'SUCCESS' && resp.responseStatus.STATUSCODE == '200') {
                    // this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
                    console.log('hunterJsonResponse');
                    console.log();
                    _this.hunterJsonResponse = JSON.parse(resp.responseData.jsonResponse.hunterJsonResponse);
                    if (_this.hunterJsonResponse.data.first_name != null && _this.hunterJsonResponse.data.first_name != undefined && _this.hunterJsonResponse.data.last_name != null && _this.hunterJsonResponse.data.last_name != undefined && _this.hunterJsonResponse.data.email != null && _this.hunterJsonResponse.data.email != undefined) {
                        //'phone_number' :resp.data.phone_number.split('').join(' '),
                        _this.hunter = {
                            'first_name': _this.hunterJsonResponse.data.first_name,
                            'last_name': _this.hunterJsonResponse.data.last_name,
                            'linkedin_url': _this.hunterJsonResponse.data.linkedin_url,
                            'email': _this.hunterJsonResponse.data.email,
                            'domain': _this.hunterJsonResponse.data.domain,
                            'status': 'sucess'
                        };
                        if (_this.hunterJsonResponse.data.company != null) {
                            _this.hunter['company'] = _this.hunterJsonResponse.data.company;
                        }
                        else {
                            _this.hunter['company'] = '-';
                        }
                        if (_this.hunterJsonResponse.data.position != null) {
                            _this.hunter['position'] = _this.hunterJsonResponse.data.position;
                        }
                        else {
                            _this.hunter['position'] = '-';
                        }
                        if (_this.hunterJsonResponse.data.phone_number != null && _this.hunterJsonResponse.data.phone_number != "") {
                            //console.log('fff')
                            _this.hunter['phone_number'] = '+' + _this.hunterJsonResponse.data.phone_number;
                        }
                        else {
                            //console.log('sddsdsfff')
                            _this.hunter['phone_number'] = '-';
                        }
                    }
                    else {
                        _this.hunter = {
                            'first_name': '',
                            'last_name': '',
                            'linkedin_url': '',
                            'email': '',
                            'domain': '',
                            'status': 'failure'
                        };
                        _this.hunter['phone_number'] = '-';
                        _this.hunter['company'] = '-';
                        _this.hunter['position'] = '-';
                    }
                    console.log('lushaJsonResponse');
                    if (resp.responseData.jsonResponse.lushaJsonResponse != "") {
                        console.log(resp.responseData.jsonResponse.lushaJsonResponse);
                        _this.lushaJsonResponse = JSON.parse(resp.responseData.jsonResponse.lushaJsonResponse);
                        if (_this.lushaJsonResponse.data.firstName != null && _this.lushaJsonResponse.data.firstName != undefined && _this.lushaJsonResponse.data.lastName != null && _this.lushaJsonResponse.data.lastName != undefined && _this.lushaJsonResponse.data.emailAddresses[0].email != null && _this.lushaJsonResponse.data.email != undefined) {
                            _this.lusha = {
                                'first_name': _this.lushaJsonResponse.data.firstName,
                                'last_name': _this.lushaJsonResponse.data.lastName,
                                'linkedin_url': '',
                                'email': _this.lushaJsonResponse.data.emailAddresses[0].email,
                                'domain': _this.lushaJsonResponse.data.company.domain,
                                'status': 'sucess'
                            };
                            if (_this.lushaJsonResponse.data.company.name != null) {
                                _this.lusha['company'] = _this.lushaJsonResponse.data.company.name;
                            }
                            else {
                                _this.lusha['company'] = '-';
                            }
                            _this.lusha['position'] = '-';
                            if (_this.lushaJsonResponse.data.phoneNumbers[0].internationalNumber != null && _this.lushaJsonResponse.data.phoneNumbers[0].internationalNumber != "") {
                                //console.log('fff')
                                // this.lusha['phone_number']=this.lushaJsonResponse.data.phoneNumbers[0].internationalNumber.split('').join(' ');
                                _this.lusha['phone_number'] = _this.lushaJsonResponse.data.phoneNumbers[0].internationalNumber;
                            }
                            else {
                                //console.log('sddsdsfff')
                                _this.lusha['phone_number'] = '-';
                            }
                            if (_this.lushaJsonResponse.data.phoneNumbers[1].internationalNumber != null && _this.lushaJsonResponse.data.phoneNumbers[1].internationalNumber != "") {
                                //console.log('fff')
                                _this.lusha['phone_number_two'] = _this.lushaJsonResponse.data.phoneNumbers[1].internationalNumber;
                            }
                            else {
                                //console.log('sddsdsfff')
                                _this.lusha['phone_number_two'] = '';
                            }
                        }
                        else {
                            _this.lusha = {
                                'first_name': '',
                                'last_name': '',
                                'linkedin_url': '',
                                'email': '',
                                'domain': '',
                                'status': 'failure'
                            };
                            _this.lusha['phone_number'] = '-';
                            _this.lusha['company'] = '-';
                            _this.lusha['position'] = '-';
                            _this.lusha['phone_number_two'] = '-';
                        }
                    }
                }
                else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '601') {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
                else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '500') {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
                else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '210') {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    _this.helperservice.backtohome();
                }
                else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '300') {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
                else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '602') {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
                else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '603') {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
            }, function (err) {
                loadingPop_1.dismiss();
                _this.helperservice.sendalertmessage('bottom', err);
            });
        }
    };
    // SAVE TO CONTACT INFORMATION
    ContactPage.prototype.add_this_data = function () {
        var _this = this;
        var add_card = {
            'locale': 'en',
            'firstName': this.hunter.first_name,
            'lastName': this.hunter.last_name,
            'email': this.hunter.email,
            'mobile': '',
            'phone': this.hunter['phone_number'],
            'sessionId': localStorage.getItem('customerSessionId'),
            'company': this.hunter['company'],
            'os': 'Web',
            'position': this.hunter['position'],
            'cardPic': '',
            'cardPicExt': '',
            'osVersion': this.osversion,
            'appVersion': '1.0',
            'customerId': localStorage.getItem("customerId"),
            'jsonResponse': '{}',
            'cardId': '',
            'caller': 'Hunter'
        };
        console.log(add_card);
        var loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();
        this.globalservice.add_bisnes_card(add_card).subscribe(function (resp) {
            loadingPop.dismiss();
            console.log(resp);
            // this.navCtrl.push(HomePage);
            if (resp.responseStatus.STATUS == "SUCCESS") {
                _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bussinesscard_bussinesscard__["a" /* BussinesscardPage */]);
            }
            else if (resp.responseStatus.STATUS == "FAILED" && resp.responseStatus.STATUSCODE == "210") {
                _this.helperservice.backtohome();
            }
            else {
                _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
            }
        }, function (err) {
            _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
        });
    };
    // ADD LUSHA DETAILS
    ContactPage.prototype.add_lusha_data = function () {
        var _this = this;
        var add_card = {
            'locale': 'en',
            'firstName': this.lusha.first_name,
            'lastName': this.lusha.last_name,
            'email': this.lusha.email,
            'mobile': '',
            'phone': this.lusha['phone_number'],
            'sessionId': localStorage.getItem('customerSessionId'),
            'company': this.lusha['company'],
            'os': 'Web',
            'position': this.lusha['position'],
            'cardPic': '',
            'cardPicExt': '',
            'osVersion': this.osversion,
            'appVersion': '1.0',
            'customerId': localStorage.getItem("customerId"),
            'jsonResponse': '{}',
            'cardId': '',
            'caller': 'Lusha'
        };
        console.log(add_card);
        var loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();
        this.globalservice.add_bisnes_card(add_card).subscribe(function (resp) {
            loadingPop.dismiss();
            console.log(resp);
            // this.navCtrl.push(HomePage);
            if (resp.responseStatus.STATUS == "SUCCESS") {
                _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bussinesscard_bussinesscard__["a" /* BussinesscardPage */]);
            }
            else if (resp.responseStatus.STATUS == "FAILED" && resp.responseStatus.STATUSCODE == "210") {
                _this.helperservice.backtohome();
            }
            else {
                _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
            }
        }, function (err) {
            _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
        });
    };
    // BACK TO DASHBOARD
    ContactPage.prototype.got_to_home = function () {
        var index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__my_account_my_account__["a" /* MyAccountPage */]);
    };
    ContactPage.prototype.got_to_camcard = function () {
        this.navCtrl.push('camacard-test');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Contact</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="contact_search">\n  <div class="conatct_container">\n    <div class="container">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <div class="log-in-form-cont">\n            \n                <h2>Enter first name, last name and domain name to launch the search</h2>\n            \n              <form>\n              <ion-list>\n                <div class="static_col">\n                  <ion-item>\n                    <ion-input type="text" name="first_name" [(ngModel)]="user.first_name" maxlength="50" placeholder="First name"></ion-input>\n                     <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n                  </ion-item>\n                </div>\n                <div class="static_col">\n                  <ion-item>\n                    <ion-input type="text" name="last_name" [(ngModel)]="user.last_name"  maxlength="50" placeholder="Last name"></ion-input>\n                    <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n                  </ion-item>\n                </div>\n                <div class="static_col2"><span>@</span></div>\n                <div class="static_col">\n                  <ion-item>\n                    <ion-input type="text" name="domain" [(ngModel)]="user.domain"  maxlength="50" placeholder="company.com"></ion-input>\n                    <ion-label class="mail-icon-wrap"><img src="assets/imgs/www.png" alt=""></ion-label>\n                  </ion-item>\n                </div>\n                \n               \n              </ion-list>\n              <button ion-button class="log-in-bt" type="submit" (click)="search_contact()" >Search</button>\n  \n  \n              </form>\n             \n  \n  \n            </div>\n\n            <!-- <div class="contact-lower-part">\n              <p>You have exceeded your monthly credit.</p>\n              <h2>Two options :</h2>\n              <h3>Upgrade to the next plan</h3>\n              <h3>wait to the next month</h3>\n            </div> -->\n            <!-- <div class="contact-lower-part contact-lower-part2">\n              <b>Alexandra Fleury</b>\n              <p>Executive business coach at afcoach.fr</p>\n              <div class="mail-info">\n                <h4>alexandra@afcoach.fr</h4>\n                <ul>\n                  <li><img src="assets/imgs/icon-5.png" alt="">+ 33 6 12 34 56 78</li>\n                  <li><img src="assets/imgs/icon-5.png" alt="">+ 33 6 12 34 56 78</li>\n                </ul>\n                <button ion-button class="save-bt" type="submit" >Save</button>\n              </div>\n            </div> -->\n\n            <!-- <div class="contact-lower-part">\n                \n                <h2>No results found.</h2>\n                <h3>Nevertheless most common patter is :</h3>\n                <h3>Most common pattern : first@afcoach.fr</h3>\n              </div> -->\n              <!-- <div class="contact-lower-part contact-lower-part2">\n                  <b>Alexandra Fleury</b>\n                  <p>Executive business coach at afcoach.fr</p>\n                  <div class="mail-info">\n                    <h4>alexandra@afcoach.fr</h4>\n                    <ul>\n                      <li><img src="assets/imgs/no-phone.png" alt="">No phone contact found</li>\n                      \n                    </ul>\n                    <button ion-button class="save-bt" type="submit" >Save</button>\n                  </div>\n                </div> -->\n\n<!-- -----------------------------------------LIST WITH 3 GRIDS---------------------------------------- -->\n\n<!-- <div class="contact-lower-main-wrapper">\n  <div class="contact-lower-part">\n    <p>You have exceeded your monthly credit.</p>\n    <h2>Two options :</h2>\n    <h3>Upgrade to the next plan</h3>\n    <h3>wait to the next month</h3>\n  </div> -->\n\n  \n\n  <div class="contact-lower-main-wrapper">\n    <div *ngIf="hunter.status !=\'\'">\n\n      <div *ngIf="hunter.status ==\'sucess\'">\n        <div class="contact-lower-part contact-lower-part2">\n          <b>{{hunter.first_name}} {{hunter.last_name}}</b>\n          <p>{{hunter.position}} at {{hunter.company\n          }}</p>\n          <div class="mail-info">\n            <h4>{{hunter.email}}</h4>\n            <ul>\n              <li><img src="assets/imgs/icon-5.png" alt=""> {{hunter.phone_number}}</li>\n              <!-- <li><img src="assets/imgs/icon-5.png" alt="">+ 33 6 12 34 56 78</li> -->\n            </ul>\n            <button class="save-bt" type="submit" (click)="add_this_data()">Save</button>\n          </div>\n        </div>\n      </div>\n      \n      <div *ngIf="hunter.status ==\'failure\'  ">\n        <div class="contact-lower-part no-result-found">\n      \n          <h2>No results found.</h2>\n          <!-- <h3>Nevertheless most common patter is :</h3>\n          <h3>Most common pattern : first@afcoach.fr</h3> -->\n        </div>\n      </div>\n      </div>\n      \n      \n      <div *ngIf="lusha.status !=\'\'">\n      \n      <div *ngIf="lusha.status ==\'sucess\'">\n        <div class="contact-lower-part contact-lower-part2">\n          <b>{{lusha.first_name}} {{lusha.last_name}}</b>\n          <p>{{lusha.position}} at {{lusha.company\n          }}</p>\n          <div class="mail-info">\n            <h4>{{lusha.email}}</h4>\n            <ul>\n              <li><img src="assets/imgs/icon-5.png" alt=""> {{lusha.phone_number}}</li>\n              <li><img src="assets/imgs/icon-5.png" alt=""> {{lusha.phone_number_two}}</li>\n            </ul>\n            <button class="save-bt" type="submit" (click)="add_lusha_data()">Save</button>\n          </div>\n        </div>\n      </div>\n      \n      <div *ngIf="lusha.status ==\'failure\'">\n        <div class="contact-lower-part no-result-found">\n      \n          <h2>No results found.</h2>\n          <!-- <h3>Nevertheless most common patter is :</h3>\n          <h3>Most common pattern : first@afcoach.fr</h3> -->\n        </div>\n      </div>\n  </div>\n\n\n\n</div>\n\n  \n\n  \n  <!--  -->\n\n\n \n\n  <!-- <div class="contact-lower-part contact-lower-part2">\n    <b>Alexandra Fleury</b>\n    <p>Executive business coach at afcoach.fr</p>\n    <div class="mail-info">\n      <h4>alexandra@afcoach.fr</h4>\n      <ul>\n        <li><img src="assets/imgs/icon-5.png" alt="">+ 33 6 12 34 56 78</li>\n        <li><img src="assets/imgs/icon-5.png" alt="">+ 33 6 12 34 56 78</li>\n      </ul>\n      <button class="save-bt" type="submit">Save</button>\n    </div>\n  </div> -->\n\n  <!-- <div class="contact-lower-part contact-lower-part2">\n    <b>Alexandra Fleury</b>\n    <p>Executive business coach at afcoach.fr</p>\n    <div class="mail-info">\n      <h4>alexandra@afcoach.fr</h4>\n      <ul>\n        <li><img src="assets/imgs/icon-5.png" alt="">+ 33 6 12 34 56 78</li>\n        <li><img src="assets/imgs/icon-5.png" alt="">+ 33 6 12 34 56 78</li>\n      </ul>\n      <button class="save-bt" type="submit">Save</button>\n    </div>\n  </div> -->\n\n  <!-- <div class="contact-lower-part contact-lower-part2">\n    <b>Alexandra Fleury</b>\n    <p>Executive business coach at afcoach.fr</p>\n    <div class="mail-info">\n      <h4>alexandra@afcoach.fr</h4>\n      <ul>\n        <li><img src="assets/imgs/icon-5.png" alt="">+ 33 6 12 34 56 78</li>\n        <li><img src="assets/imgs/icon-5.png" alt="">+ 33 6 12 34 56 78</li>\n      </ul>\n      <button class="save-bt" type="submit">Save</button>\n    </div>\n  </div>\n\n</div> -->\n                \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n  <ion-fab right bottom class="home-menu"> \n    <button ion-fab color="danger" (click)="got_to_home()"><ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon></button>\n  </ion-fab>\n\n  <!-- <button (click)="got_to_camcard()">got cam-card</button> -->\n</ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_account_my_account__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_stat_project_stat__ = __webpack_require__(139);
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
 * Generated class for the TrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackPage = /** @class */ (function () {
    function TrackPage(navCtrl, navParams, globalservice, helperservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.p = 1;
        this.itemsPerPage = 10;
        this.remaing_item = "";
        this.display_total_number_of_records = '';
        this.total_record = '';
        this.dynamicpageheading = '';
        this.readstatus = this.navParams.get('read');
        if (this.readstatus == 1) {
            this.dynamicpageheading = 'Tracked file read';
        }
        else {
            this.dynamicpageheading = 'Tracked file not  read';
        }
        console.log(this.readstatus);
    }
    TrackPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //  window.location.reload(); 
        var loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();
        this.globalservice.listproject(this.readstatus).subscribe(function (resp) {
            loadingPop.dismiss();
            console.log(resp.contents);
            _this.total_record = resp.total;
            if (_this.itemsPerPage > _this.total_record) {
                _this.display_total_number_of_records = _this.total_record;
            }
            else {
                _this.display_total_number_of_records = _this.itemsPerPage;
            }
            _this.remaing_item = _this.total_record - _this.display_total_number_of_records;
            if (resp.contents != "") {
                _this.projects_list = resp.contents;
            }
            else {
                // this.helperservice.sendalertmessage('bottom','No Projects Created');
            }
            //this.navCtrl.push('tilkee_api_integration');
        }, function (err) {
            _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
        });
    };
    TrackPage.prototype.ionViewDidLoad = function () {
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
    TrackPage.prototype.pageChanged = function ($event) {
        console.log(start + " to " + end + " of " + totalItemsCount);
        console.log(this.display_total_number_of_records);
        console.log();
        console.log();
        if ($event == 1) {
            this.display_total_number_of_records = this.itemsPerPage;
        }
        else {
            var totalItemsCount = this.total_record;
            var numberOfItemsPerPage = this.itemsPerPage;
            var page = $event;
            var numberOfPages = Math.floor((totalItemsCount + numberOfItemsPerPage - 1) / numberOfItemsPerPage);
            var start = (page * numberOfItemsPerPage) - (numberOfItemsPerPage - 1);
            var end = Math.min(start + numberOfItemsPerPage - 1, totalItemsCount);
            this.display_total_number_of_records = end;
            // this.display_total_number_of_records = $event*this.itemsPerPage;
            // this.remaing_item = this.total_record - this.display_total_number_of_records ;
            // if(this.remaing_item < this.display_total_number_of_records)
            // {
            //   this.display_total_number_of_records =this.total_record 
            //  // this.remaing_item = this.total_record -this.display_total_number_of_records
            // }
            // else
            // {
            //   this.display_total_number_of_records = $event*this.itemsPerPage
            //   this.remaing_item = this.total_record -this.display_total_number_of_records
            // }
        }
        console.log($event);
    };
    // go to satistic page
    TrackPage.prototype.getstat = function (projectid, projectname) {
        //this.navCtrl.push('projectstat',{projectid:projectid,projectname:projectname})
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__project_stat_project_stat__["a" /* ProjectStatPage */], { projectid: projectid, projectname: projectname });
    };
    // back to dashboard 
    TrackPage.prototype.got_to_home = function () {
        var index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__my_account_my_account__["a" /* MyAccountPage */]);
    };
    TrackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-track',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/track/track.html"*/'<!--\n  Generated template for the TrackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{dynamicpageheading}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <div class="top-buttons">\n\n        <div class="next-prev-wrap">\n            <pagination-controls (pageChange)="pageChanged(p = $event)" autoHide="true" directionLinks="true"></pagination-controls> \n            <!-- <a href="#"><ion-icon ios="ios-arrow-dropright-outline" md="ios-arrow-dropright-outline"></ion-icon></a>\n            <a href="#"><ion-icon ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline"></ion-icon></a> -->\n          </div>\n      <div class="pagination">Showing {{display_total_number_of_records}} of {{total_record}} records</div>\n    </div>\n      \n  <div class="divTable" *ngFor ="let data of projects_list | paginate: { itemsPerPage: 10, currentPage: p }; let i = index">\n   \n    <div class="divTableBody">\n      <div class=""  [ngClass]="i > 0 ? \'divTableRow head disnone\': \'divTableRow head\'">\n        <div class="divTableCell">Interet</div>\n        <div class="divTableCell">Nom</div>\n        <div class="divTableCell">Duree</div>\n        <div class="divTableCell">Dernier Acces</div>\n        <div class="divTableCell">Connexion</div>\n       \n      </div>\n\n      <div class="divTableRow"  (click)="getstat(data.project_id,data.project_name)"> \n          <div class="divTableCell">\n              <div class="mob-table-title">Interet:</div>\n            <div class="circle">{{data.interest}}</div>\n          </div>\n          <div class="divTableCell">\n            <div class="mob-table-title">Nom:</div>\n            <div class="info">\n            \n              \n              <h2>{{data.name}}</h2>\n              <p><b>{{data.project_name}}</b></p>\n            </div>\n  \n          </div>\n          <div class="divTableCell" style="width:150px"> \n            <div class="mob-table-title">Duree:</div>\n            <div class="info">{{data.total_time | milisecondtotime}}</div>\n            \n          </div>\n          <div class="divTableCell" style="width:150px">\n            <div class="mob-table-title">Dernier acces:</div>\n          <div *ngIf="data.last_sign_in_at!=null"class="info">{{ data.last_sign_in_at | dateformatter }}</div>  \n          </div>\n          <div class="divTableCell" style="width:150px">\n            <div class="mob-table-title">Connexioner:</div> \n           <div class="info">{{data.nb_connections}} fois</div> \n          </div>\n        </div>\n     \n\n      \n      \n\n    </div>\n  </div>\n  \n\n  <!-- <pagination-controls  id="some_id"\n                      (pageChange)="pageChanged($event)"\n                      maxSize="9"\n                      directionLinks="true"\n                      autoHide="true"\n                      responsive="true"\n                      previousLabel="Previous"\n                      nextLabel="Next"\n                      screenReaderPaginationLabel="Pagination"\n                      screenReaderPageLabel="page"\n                      screenReaderCurrentLabel="You\'re on page"></pagination-controls> -->\n\n  \n</div>\n<ion-fab right bottom class="home-menu"> \n    <button ion-fab color="danger" (click)="got_to_home()"><ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/track/track.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__["a" /* HelperService */]])
    ], TrackPage);
    return TrackPage;
}());

//# sourceMappingURL=track.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_account_my_account__ = __webpack_require__(20);
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
 * Generated class for the PaymentdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentdetailsPage = /** @class */ (function () {
    function PaymentdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentdetailsPage');
        this.setBackButtonAction();
    };
    PaymentdetailsPage.prototype.got_to_home = function () {
        var index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__my_account_my_account__["a" /* MyAccountPage */]);
    };
    PaymentdetailsPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            console.log("backbutton fire");
            //   //Write here wherever you wanna do
            //   const index = this.navCtrl.getActive().index;
            //   console.log(index);
            //  // this.navCtrl.remove(0, index+1);
            //  this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-4));
            //   //this.navCtrl.push(BussinesscardPage);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__my_account_my_account__["a" /* MyAccountPage */]);
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */])
    ], PaymentdetailsPage.prototype, "navBar", void 0);
    PaymentdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-paymentdetails',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/paymentdetails/paymentdetails.html"*/'<!--\n  Generated template for the PaymentdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Thank you</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class="thank-you-wrap">\n             <h2> Thank you for subscribing ley valy yearly plan.</h2>\n             <p>Please make a payment of $... at the below mentioned account:</p> \n              <b>IBAN : ......</b>\n              <b>BIC : ....</b>\n              \n              <p>\n              Your plan will be activated once you make the payment and we receive payment confirmation from our bank.</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </div>\n\n  <ion-fab right bottom class="home-menu">\n    <button ion-fab color="danger" (click)="got_to_home()">\n      <ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/paymentdetails/paymentdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], PaymentdetailsPage);
    return PaymentdetailsPage;
}());

//# sourceMappingURL=paymentdetails.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bussinesscard_bussinesscard__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trackfile_trackfile__ = __webpack_require__(451);
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
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyAccountPage = /** @class */ (function () {
    function MyAccountPage(globalservice, navCtrl, navParams, helperservice) {
        this.globalservice = globalservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helperservice = helperservice;
    }
    MyAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyAccountPage');
    };
    MyAccountPage.prototype.gobussiness = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bussinesscard_bussinesscard__["a" /* BussinesscardPage */]);
    };
    MyAccountPage.prototype.start_track_a_file = function () {
        //  this.navCtrl.push('tilkee_api_integration')
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__trackfile_trackfile__["a" /* TrackfilePage */]);
    };
    MyAccountPage.prototype.go_search_contact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */]);
    };
    MyAccountPage.prototype.onFileChanged = function (event) {
        var selectedFile = event.target.files[0];
        // var form = new FormData();
        //  form.append("file", selectedFile);
        //   this.globalservice.tilkeedirectupload(selectedFile).subscribe((resp)=>{
        //     console.log(resp)
        //     this.globalservice.datadirectupload(selectedFile,resp).subscribe((resp)=>{
        //       console.log(resp)
        //     })
        //   },(err)=>{})
    };
    MyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-account',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/my-account/my-account.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Home </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content no-padding>\n    <div class="container">\n      <div class="dash-list">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12><h1>One app. Less work. More time.</h1></ion-col>\n          <ion-col col-6>\n              <div class="dash-box hvr-wobble-horizontal" (click)="gobussiness();">\n                 <img src="assets/imgs/001-id-card.svg" alt="">\n                <h2>Business cards</h2>\n              </div>\n          </ion-col>\n          <ion-col col-6>\n              <div class="dash-box hvr-wobble-horizontal" (click)="go_search_contact();">\n                  <img src="assets/imgs/002-search.svg" alt="">\n                <h2>Search contact information</h2> \n              </div>\n          </ion-col>\n          <!-- <ion-col col-6>\n              <div class="dash-box hvr-wobble-horizontal dash-bg-3">\n                  <img src="assets/imgs/003-meeting.svg" alt="">\n                <h2>Schedule a <br> meeting</h2>\n              </div>\n          </ion-col> -->\n          <ion-col col-6>\n              <div class="dash-box hvr-wobble-horizontal" (click)="start_track_a_file();">\n                  <img src="assets/imgs/004-search-1.svg" alt="">\n                <h2>Track files</h2>\n              </div>\n          </ion-col>\n          <ion-col col-6>\n            <div class="dash-box hvr-wobble-horizontal">\n                <img style="width: 60px; height: auto;margin-top: 11px;" src="assets/imgs/coming_soon.png" alt="">   \n              <h2>Coming Soon</h2>\n            </div>\n        </ion-col>\n         \n        </ion-row>\n      </ion-grid>\n    </div>\n    </div>\n\n    <!-- <input (change)="onFileChanged($event)" type="file"   accept="application/docs, application/vnd.ms-excel, application/vnd.ms-powerpoint,\n                        text/plain, application/pdf,image/*" capture="filesystem"  multiple="multiple">\n\n    <input type="button" name="pdfsubmit" />                     -->\n\n  </ion-content>\n  '/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/my-account/my-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_helper_helper_service__["a" /* HelperService */]])
    ], MyAccountPage);
    return MyAccountPage;
}());

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bussinesscard-add/bussinesscard-add.module": [
		878,
		15
	],
	"../pages/camcard/camcard.module": [
		864,
		9
	],
	"../pages/change-password/change-password.module": [
		865,
		14
	],
	"../pages/contact/contact.module": [
		879,
		13
	],
	"../pages/create-project/create-project.module": [
		866,
		8
	],
	"../pages/drafted-file/drafted-file.module": [
		867,
		7
	],
	"../pages/file-tilkee-start/file-tilkee-start.module": [
		870,
		6
	],
	"../pages/file-upload/file-upload.module": [
		868,
		5
	],
	"../pages/list-projects/list-projects.module": [
		869,
		4
	],
	"../pages/list-tilk/list-tilk.module": [
		871,
		3
	],
	"../pages/paymentdetails/paymentdetails.module": [
		872,
		12
	],
	"../pages/preview-tilk/preview-tilk.module": [
		873,
		2
	],
	"../pages/readed-file/readed-file.module": [
		874,
		1
	],
	"../pages/tilk-create/tilk-create.module": [
		875,
		0
	],
	"../pages/tilk-stat/tilk-stat.module": [
		876,
		11
	],
	"../pages/track/track.module": [
		877,
		10
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 228;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_account_my_account__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_image_compress__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_image_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_img_cropper__ = __webpack_require__(452);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var SignupPage = /** @class */ (function () {
    function SignupPage(platform, imgCompressService, globalservice, helperservice, navCtrl, navParams) {
        this.platform = platform;
        this.imgCompressService = imgCompressService;
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.user = {
            'fname': '',
            'lname': '',
            'enterprice': '',
            'password': '',
            'position': '',
            'mobile': '',
            'phone': '',
            'email': ''
        };
        this.showTitle = false;
        // this.data.image='assets/imgs/pro_pic.jpeg'
        this.base64textString = "";
        this.image_name = "";
        this.image_ext = "";
        this.biofingerprint = "";
        // this.cropperSettings = new CropperSettings();
        // this.cropperSettings.width = 100;
        // this.cropperSettings.height = 100;
        // this.cropperSettings.croppedWidth = 100;
        // this.cropperSettings.croppedHeight = 100;
        // this.cropperSettings.canvasWidth = 400;
        // this.cropperSettings.canvasHeight = 300;
        // this.cropperSettings.rounded=true;
        // this.data = {};
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_7_ngx_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.rounded = true;
        this.data = {
            'image': 'assets/imgs/pro_pic.jpeg'
        };
        console.log(this.data);
    }
    // fileChangeListener($event) 
    // {
    //   console.log($event.target.files);
    //   console.log($event.target.files[0]);
    //   var image:any = new Image();
    //   var file:File = $event.target.files[0];
    //   var myReader:FileReader = new FileReader();
    //   var that = this;
    //  let uploadalert = this.helperservice.createLoadingBar_upload();
    //      uploadalert.present();
    //   myReader.onloadend = function (loadEvent:any) {
    //   document.getElementById("cropperbox").style.display = "block";
    //   document.getElementById("savebutton").style.display ="block" ;
    //     //x.style.display = "block";
    //       console.log("fired");
    //       uploadalert.dismiss();
    //       image.src = loadEvent.target.result;
    //       that.cropper.setImage(image);
    //   };
    //  myReader.readAsDataURL(file);
    //}
    // saveimage()
    // {
    //   console.log(this.data)
    //    var ImageURL = this.data.image;
    //    // Split the base64 string in data and contentType
    //     var block = ImageURL.split(";");
    //    // Get the content type of the image
    //     var contentType = block[0].split(":")[1];// In this case "image/gif"
    //    // get the real base64 content of the file
    //      var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
    //      this.base64textString = realData;
    //      this.image_ext ="jpeg"
    //      document.getElementById("cropperbox").style.display = "none";
    //     document.getElementById("savebutton").style.display ="none" ;
    // //  // Naming the image
    // // const date = new Date().valueOf();
    // // let text = '';
    // // const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // // for (let i = 0; i < 5; i++) {
    // //    text += possibleText.charAt(Math.floor(Math.random() *    possibleText.length));
    // // }
    // // // Replace extension according to your media type
    // // const imageName = date + '.' + text + '.jpeg';
    // // // call method that creates a blob from dataUri
    // // const imageBlob = this.dataURItoBlob(base64);
    // // //var file:File 
    // // const imageFile= new File([imageBlob], imageName, { type: 'image/jpeg' });
    // // console.log(JSON.stringify(imageFile));
    // // console.log(typeof imageFile)
    // // let fileList: FileList;
    // // fileList[0] = imageFile;
    // // console.log(fileList)
    // //let images: Array<IImage> = [];
    // // ImageCompressService.filesToCompressedImageSource(fileList).then(observableImages => {
    // //   observableImages.subscribe((image) => {
    // //     images.push(image);
    // //   }, (error) => {
    // //     console.log("Error while converting");
    // //   }, () => {
    // //             this.processedImages = images;  
    // //             console.log("modifiedimage :");  
    // //             console.log( this.processedImages)  ;
    // //             var str = this.processedImages[0].compressedImage.imageDataUrl;
    // //             var ix = str.indexOf(",");
    // //             var objfullVersion=str.substring(ix+1);
    // //             console.log(objfullVersion)  ;
    // //             this.base64textString=this.processedImages[0].compressedImage.imageDataUrl;
    // //             this.showTitle = true;  
    // //             console.log(this.base64textString);        
    // //   });
    // // });
    // }
    // dataURItoBlob(dataURI) {
    //   const byteString = atob(dataURI);
    //   const arrayBuffer = new ArrayBuffer(byteString.length);
    //   const int8Array = new Uint8Array(arrayBuffer);
    //   for (let i = 0; i < byteString.length; i++) {
    //     int8Array[i] = byteString.charCodeAt(i);
    //   }
    //   const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });    
    //   return blob;
    // }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
        //  console.log(this.platform.platforms());
        //  var hasConsole = typeof console !== "undefined"
        function randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i)
                result += chars[Math.floor(Math.random() * chars.length)];
            return result;
        }
        var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        console.log(rString);
        if (localStorage.getItem("deviceid") != "") {
            localStorage.setItem("deviceid", rString);
            //   requestIdleCallback(function () {
            //     Fingerprint2.get(function (components) {
            //       console.log(components) // an array of components: {key: ..., value: ...}
            //       let murmur = Fingerprint2.x64hash128(components.map(function (pair) { return pair.value }).join(), 31);
            //       //console.log(this.biofingerprint);
            //       localStorage.setItem("deviceid" , murmur);
            //     })
            // })
        }
        var txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
        txt += "<p>Browser Name: " + navigator.appName + "</p>";
        txt += "<p>Browser Version: " + navigator.appVersion + "</p>";
        txt += "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
        txt += "<p>Platform: " + navigator.platform + "</p>";
        txt += "<p>User-agent header: " + navigator.userAgent + "</p>";
        var positon_one = navigator.userAgent.indexOf("(");
        var postion_last = navigator.userAgent.indexOf(")");
        var res = navigator.userAgent.slice(positon_one + 1, postion_last); //console.log(res);
        var res = navigator.userAgent.slice(positon_one + 1, postion_last); //console.log(res);
        var res_devicename = res.split(";");
        this.devicename = res_devicename[1];
        console.log(txt);
        console.log(this.devicename);
        // =======================================
        //var objappVersion = navigator.appVersion;
        var objAgent = navigator.userAgent;
        var objbrowserName = navigator.appName;
        var objfullVersion = '' + parseFloat(navigator.appVersion);
        var objBrMajorVersion = parseInt(navigator.appVersion, 10);
        var objOffsetName, objOffsetVersion, ix;
        // In Chrome 
        if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
            objbrowserName = "Chrome";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
        }
        else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
            objbrowserName = "Microsoft Internet Explorer";
            objfullVersion = objAgent.substring(objOffsetVersion + 5);
        }
        else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
            objbrowserName = "Firefox";
        }
        else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
            objbrowserName = "Safari";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
            if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
                objfullVersion = objAgent.substring(objOffsetVersion + 8);
        }
        else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) <
            (objOffsetVersion = objAgent.lastIndexOf('/'))) {
            objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
            objfullVersion = objAgent.substring(objOffsetVersion + 1);
            if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
                objbrowserName = navigator.appName;
            }
        }
        // trimming the fullVersion string at semicolon/space if present
        if ((ix = objfullVersion.indexOf(";")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        if ((ix = objfullVersion.indexOf(" ")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        objBrMajorVersion = parseInt('' + objfullVersion, 10);
        if (isNaN(objBrMajorVersion)) {
            objfullVersion = '' + parseFloat(navigator.appVersion);
            objBrMajorVersion = parseInt(navigator.appVersion, 10);
        }
        var txt1 = 'Browser name = ' + objbrowserName + '<br>'
            + 'Full version  = ' + objfullVersion + '<br>'
            + 'Major version = ' + objBrMajorVersion + '<br>'
            + 'navigator.appName = ' + navigator.appName + '<br>'
            + 'navigator.userAgent = ' + navigator.userAgent + '<br>';
        this.osversion = objbrowserName + "_" + objfullVersion;
        this.browserDetails = objbrowserName;
        console.log(txt1);
        // =======================================
    };
    SignupPage.prototype.onFileChanged = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        var fileList;
        var images = [];
        __WEBPACK_IMPORTED_MODULE_6_ng2_image_compress__["ImageCompressService"].filesToCompressedImageSource(event.target.files).then(function (observableImages) {
            observableImages.subscribe(function (image) {
                images.push(image);
            }, function (error) {
                console.log("Error while converting");
            }, function () {
                _this.processedImages = images;
                console.log("modifiedimage :");
                console.log(_this.processedImages);
                var str = _this.processedImages[0].compressedImage.imageDataUrl;
                var ix = str.indexOf(",");
                var objfullVersion = str.substring(ix + 1);
                console.log(objfullVersion);
                _this.image_name = objfullVersion;
                _this.base64textString = _this.processedImages[0].compressedImage.imageDataUrl;
                _this.showTitle = true;
            });
        });
        // console.log(this.selectedFile)
        var image_name = this.selectedFile.name;
        var res_img = image_name.split(".");
        this.image_ext = res_img[1];
        // console.log(this.image_ext);
        var files = event.target.files;
        //  //var files =  this.processedImages;
        //  var file = files[0];
        //   if (files && file) 
        //   {
        //       var reader = new FileReader();
        //       reader.onload =this._handleReaderLoaded.bind(this);
        //       reader.readAsBinaryString(file);
        //   }
    };
    // _handleReaderLoaded(readerEvt) {
    //   var binaryString = readerEvt.target.result;
    //   this.image_name = btoa(binaryString);
    //        //  this.base64textString= 'data:image/png;base64,' + btoa(binaryString);
    //         // console.log(btoa(binaryString));
    //  }
    SignupPage.prototype.registration_at_leyvalley = function () {
        var _this = this;
        if (this.user.fname == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your first name');
        }
        else if (this.user.lname == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your last name');
        }
        else if (this.user.email == undefined || this.user.email == null || this.user.email == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your email');
        }
        else if (!new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.user.email)) {
            this.helperservice.sendalertmessage('bottom', 'Please enter proper email ');
        }
        else if (this.user.password == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your password');
        }
        else if (this.user.password.length < 6) {
            this.helperservice.sendalertmessage('bottom', 'Password must be minimum 6 charecter long ');
        }
        else {
            var loadingPop_1 = this.helperservice.createLoadingBar();
            loadingPop_1.present();
            localStorage.getItem("deviceid");
            var registration_json_1 = {
                'locale': 'eng',
                'customerFirstName': this.user.fname,
                'customerLastName': this.user.lname,
                'customerEmail': this.user.email,
                'customerPassword': this.user.password,
                'customerMobile': this.user.mobile,
                'customerPhone': this.user.phone,
                'deviceId': localStorage.getItem("deviceid"),
                'customerEnterprise': this.user.enterprice,
                'pushNotificationToken': '',
                'simOperatorName': '',
                'os': 'Web',
                'customerPosition': this.user.position,
                'profilePic': this.image_name,
                'profilePicExt': this.image_ext,
                'registrationType': 'GEN',
                'osVersion': this.osversion,
                'appVersion': '1.0',
                'deviceName': this.devicename,
                'deviceAndroidID': "",
                'deviceWifiMacID': "",
                'simSerialNo': "",
                'browserDetails': this.browserDetails
            };
            console.log(registration_json_1);
            //  this.globalservice.signup_in_tilkee(registration_json).subscribe((resp) => {
            //         loadingPop.dismiss();
            //         console.log(resp);
            // this.navCtrl.push(HomePage);
            //    if (resp.responseStatus.STATUS=="SUCCESS")
            //    {
            //      //this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE
            //     //);
            //     localStorage.setItem("customerId" , resp.responseData.customerId);
            //     localStorage.setItem("customerEmail" , resp.responseData.customerEmail);
            //     localStorage.setItem("customerFirstName" ,  resp.responseData.customerFirstName);
            //     localStorage.setItem("customerLastName" , resp.responseData.customerLastName);
            //     localStorage.setItem("customerProfilePic" , resp.responseData.customerProfilePic);
            //     localStorage.setItem("customerSessionId" , resp.responseData.customerSessionId);
            //     localStorage.setItem('customerEnterprise',resp.responseData.customerEnterprise);
            //     localStorage.setItem('customerPosition',resp.responseData.customerPosition);
            //     localStorage.setItem('customerMobile',resp.responseData.customerMobile);
            //     localStorage.setItem('customerPhone',resp.responseData.customerPhone);
            //     this.navCtrl.setRoot(MyAccountPage);     
            //   }
            //  else
            //     {
            //       this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
            //    }
            //  }, (err) => 
            //  {
            //   this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
            // });                         
            this.globalservice.siginup(registration_json_1).subscribe(function (resp) {
                loadingPop_1.dismiss();
                console.log(resp);
                // this.navCtrl.push(HomePage); 
                if (resp.responseStatus.STATUS == "SUCCESS") {
                    _this.globalservice.signup_in_tilkee(registration_json_1).subscribe(function (resp) {
                        console.log('tilkee user registration');
                        console.log(resp);
                    }, function (err) {
                        console.log(err);
                    });
                    //this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE
                    //);
                    localStorage.setItem("customerId", resp.responseData.customerId);
                    localStorage.setItem("customerEmail", resp.responseData.customerEmail);
                    localStorage.setItem("customerFirstName", resp.responseData.customerFirstName);
                    localStorage.setItem("customerLastName", resp.responseData.customerLastName);
                    localStorage.setItem("customerProfilePic", resp.responseData.customerProfilePic);
                    localStorage.setItem("customerSessionId", resp.responseData.customerSessionId);
                    localStorage.setItem('customerEnterprise', resp.responseData.customerEnterprise);
                    localStorage.setItem('customerPosition', resp.responseData.customerPosition);
                    localStorage.setItem('customerMobile', resp.responseData.customerMobile);
                    localStorage.setItem('customerPhone', resp.responseData.customerPhone);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__my_account_my_account__["a" /* MyAccountPage */]);
                }
                else {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
            }, function (err) {
                _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
            });
        }
    };
    SignupPage.prototype.gosignin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cropper', undefined),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ngx_img_cropper__["b" /* ImageCropperComponent */])
    ], SignupPage.prototype, "cropper", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg">\n  <div class="container">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <div class="log-in-form-cont">\n            <div class="profile-pic">\n              <!-- ===================== -->\n               <div *ngIf="base64textString !=\'\'" >\n                  <img src="{{base64textString}}" alt="">\n                </div>\n                <div *ngIf="base64textString ==\'\'" >\n                    <img src="assets/imgs/profile-default.png" alt="">\n                  </div>\n                  <!-- <div  *ngIf="data.image">\n                    \n                      <img src="{{data.image}}" >\n                      \n                </div> -->\n                \n              <!-- ===================== -->\n               <input style="display: none"  type="file" accept="image/*" (change)="onFileChanged($event)" #fileInput> \n              <!-- <input style="display: none"  type="file" accept="image/*" (change)="fileChangeListener($event)" #fileInput> -->\n            <span (click)="fileInput.click()"> <ion-icon ios="md-create" md="md-create"></ion-icon></span>\n\n            </div>\n\n            <!-- <div class="file-upload">\n              <span class="text">upload</span>\n              <input id="custom-input" type="file" (change)="fileChangeListener($event)">\n          </div> -->\n          <!-- <img-cropper   id="cropperbox" style="display: none;" #cropper [image]="data" [settings]="cropperSettings"> -->\n        \n         \n        <!-- </img-cropper>\n        <div id="savebutton" style="display: none;">\n            <ion-icon (click)="saveimage()"><i class="fa fa-save" style="font-size:48px;color:green"></i></ion-icon>\n        </div> -->\n        \n        \n          <br>\n\n         \n          <!-- <span class="result rounded" *ngIf="data.image" >\n              <img [src]="data.image" [width]="cropperSettings.croppedWidth" [height]="cropperSettings.croppedHeight">\n          </span> -->\n\n          \n            <form (ngSubmit)="registration_at_leyvalley()">\n            <ion-list>\n              <div class="static_col">\n                <ion-item>\n                  <ion-input type="text" name="fname" maxlength="50" placeholder="First name" [(ngModel)]="user.fname"\n                   ></ion-input>\n                   <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n                </ion-item>\n              </div>\n              <div class="static_col">\n                <ion-item>\n                  <ion-input type="text" name="lname"  maxlength="50" placeholder="Last name" [(ngModel)]="user.lname"\n                  ></ion-input>\n                  <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n                </ion-item>\n              </div>\n              <div class="static_col">\n                <ion-item>\n                  <ion-input type="text" name="enterprice"  maxlength="100" placeholder="Enterprise" [(ngModel)]="user.enterprice"></ion-input>\n                  <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-2.png" alt=""></ion-label>\n                </ion-item>\n              </div>\n              <div class="static_col">\n                <ion-item>\n                  <ion-input type="text" name="email"  maxlength="250" placeholder="Email" [(ngModel)]="user.email"></ion-input>\n                  <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-6.png" alt=""></ion-label>\n                </ion-item>\n              </div>\n              <div class="static_col">\n                <ion-item>\n                  <ion-input type="password" name="password"  maxlength="15" placeholder="Password" [(ngModel)]="user.password"></ion-input>\n                  <ion-label class="mail-icon-wrap"><img src="assets/imgs/lock.png" alt=""></ion-label>\n                </ion-item>\n              </div>\n              <div class="static_col">\n                <ion-item>\n                  <ion-input type="text" name="position"  maxlength="100" placeholder="Position" [(ngModel)]="user.position"></ion-input>\n                  <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-3.png" alt=""></ion-label>\n                </ion-item>\n              </div>\n              <div class="static_col">\n                <ion-item>\n                  <ion-input type="number" name="mobile" placeholder="Mobile"  maxlength="15" [(ngModel)]="user.mobile"></ion-input>\n                  <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-4.png" alt=""></ion-label>\n                </ion-item>\n              </div>\n              <div class="static_col">\n                <ion-item>\n                  <ion-input type="number" name="phone"  maxlength="15" placeholder="Phone" [(ngModel)]="user.phone"></ion-input>\n                  <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-5.png" alt=""></ion-label>\n                </ion-item>\n              </div>\n             \n            </ion-list>\n            <button ion-button class="log-in-bt" type="submit" >Sign Up</button>\n\n\n            </form>\n            <div class="or-wrap"><span>OR</span></div>\n            <ion-row>\n              <ion-col col-6> <button class="linkedin-bt"><div class="linkedin-bt-icon-wrap"><img src="assets/imgs/linkedin.png" alt=""></div>Sign up with Linkedin </button></ion-col>\n              <ion-col col-6> <button class="linkedin-bt sign-up-bt" (click)="gosignin()"><div class="linkedin-bt-icon-wrap"><img src="assets/imgs/sign-up.png" alt=""></div>Sign In </button></ion-col>\n              <!-- <ion-col col-12> <button class="sign-up-bt-bt" (click)="gosignup()">Sign up</button></ion-col> -->\n            </ion-row>\n\n\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button>  -->\n</ion-content>\n<ng-template #default>\n     <img src="assets/imgs/pro_pic.jpeg" alt="">\n  </ng-template>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_6_ng2_image_compress__["ImageCompressService"], __WEBPACK_IMPORTED_MODULE_5__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_4__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BussinesscardDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bussinesscard_edit_bussinesscard_edit__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addtrack_addtrack__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_account_my_account__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_stat_project_stat__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var BussinesscardDetailsPage = /** @class */ (function () {
    // 08 february 2019 6.33 pm {end}
    function BussinesscardDetailsPage(modalCtrl, document, helperservice, globalservice, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.document = document;
        this.helperservice = helperservice;
        this.globalservice = globalservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.card_image = "";
        this.card_company = "";
        this.card_email = "";
        this.card_firstName = "";
        this.card_lastName = "";
        this.card_position = "";
        this.tik_list_stat = '';
        // 08 february 2019 6.33 pm {start}
        this.allowTilkee = '';
        this.tilkeeMsg = '';
        this.cardid = navParams.get('cardid');
        console.log(this.cardid);
    }
    // get details of buiness card
    BussinesscardDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var objAgent = navigator.userAgent;
        var objbrowserName = navigator.appName;
        var objfullVersion = '' + parseFloat(navigator.appVersion);
        var objBrMajorVersion = parseInt(navigator.appVersion, 10);
        var objOffsetName, objOffsetVersion, ix;
        // In Chrome 
        if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
            objbrowserName = "Chrome";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
        }
        else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
            objbrowserName = "Microsoft Internet Explorer";
            objfullVersion = objAgent.substring(objOffsetVersion + 5);
        }
        else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
            objbrowserName = "Firefox";
        }
        else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
            objbrowserName = "Safari";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
            if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
                objfullVersion = objAgent.substring(objOffsetVersion + 8);
        }
        else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) <
            (objOffsetVersion = objAgent.lastIndexOf('/'))) {
            objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
            objfullVersion = objAgent.substring(objOffsetVersion + 1);
            if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
                objbrowserName = navigator.appName;
            }
        }
        // trimming the fullVersion string at semicolon/space if present
        if ((ix = objfullVersion.indexOf(";")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        if ((ix = objfullVersion.indexOf(" ")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        objBrMajorVersion = parseInt('' + objfullVersion, 10);
        if (isNaN(objBrMajorVersion)) {
            objfullVersion = '' + parseFloat(navigator.appVersion);
            objBrMajorVersion = parseInt(navigator.appVersion, 10);
        }
        this.osversion = objbrowserName + "_" + objfullVersion;
        //sessionId, osVersion, appVersion, customerId, os, cardId, locale
        var getcarddetails = {
            'sessionId': localStorage.getItem('customerSessionId'),
            'osVersion': this.osversion,
            'appVersion': '1.0',
            'customerId': localStorage.getItem("customerId"),
            'os': 'Web',
            'cardId': this.cardid,
            'locale': 'en'
        };
        var loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();
        console.log(getcarddetails);
        this.globalservice.get_card_details(getcarddetails).subscribe(function (resp) {
            loadingPop.dismiss();
            console.log(resp);
            // // this.navCtrl.push(HomePage); 
            if (resp.responseStatus.STATUS == "SUCCESS" && resp.responseStatus.STATUSCODE == "200") {
                _this.card_details = resp.responseData;
                _this.projectId_tilkee = _this.card_details.projectId;
                // 08 february 2019 6.33 pm {start}
                _this.allowTilkee = _this.card_details.allowTilkee;
                _this.tilkeeMsg = _this.card_details.tilkeeMsg;
                // 08 february 2019 6.33 pm {end}
                if (_this.card_details.cardPic
                    != null && _this.card_details.cardPic != undefined) {
                    _this.card_image = _this.card_details.cardPic;
                }
                else {
                    _this.card_image = "assets/imgs/business_card_no_image.png";
                }
                if (_this.card_details.company != null && _this.card_details.company != undefined && _this.card_details.company != "") {
                    _this.card_company = _this.card_details.company;
                }
                else {
                    _this.card_company = "Company details not given";
                }
                if (_this.card_details.email != null || _this.card_details.email != undefined || _this.card_details.email != "") {
                    _this.card_email = _this.card_details.email;
                }
                else {
                    _this.card_email = "Details Not Availabel";
                }
                if (_this.card_details.firstName != null && _this.card_details.firstName != undefined) {
                    _this.card_firstName = _this.card_details.firstName;
                }
                else {
                    _this.card_firstName = "Details Not Availabel";
                }
                if (_this.card_details.lastName != null && _this.card_details.lastName != undefined && _this.card_details.lastName != "") {
                    _this.card_lastName = _this.card_details.lastName;
                }
                else {
                    _this.card_lastName = "";
                }
                if (_this.card_details.mobile != 'null' && _this.card_details.mobile != undefined && _this.card_details.mobile != "") {
                    console.log('d');
                    _this.card_mobile = _this.card_details.mobile;
                }
                else {
                    _this.card_mobile = "-";
                }
                if (_this.card_details.phone != 'null' && _this.card_details.phone != undefined && _this.card_details.phone != "") {
                    console.log('er');
                    _this.card_phone = _this.card_details.phone;
                }
                else {
                    console.log('ersas');
                    _this.card_phone = "-";
                }
                if (_this.card_details.position != null && _this.card_details.position != undefined && _this.card_details.position != '') {
                    _this.card_position = _this.card_details.position;
                }
                else {
                    _this.card_position = "Position not given";
                }
                // console.log(this.card_phone);
                // console.log(this.card_mobile);
                /// check any statistical data found or not
                if (_this.projectId_tilkee != "") {
                    _this.globalservice.listtilkstat(_this.projectId_tilkee).subscribe(function (resp) {
                        console.log("resp");
                        console.log(resp);
                        if (resp.contents != "") {
                            _this.tik_list_stat = resp.contents;
                            console.log(_this.tik_list_stat);
                        }
                        else {
                            _this.tik_list_stat = '';
                            // this.helperservice.sendalertmessage('bottom','No Projects Created');
                        }
                        //this.navCtrl.push('tilkee_api_integration');
                    }, function (err) {
                        //this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
                    });
                    console.log(_this.tik_list_stat);
                }
            }
            else if (resp.responseStatus.STATUS == "FAILED" && resp.responseStatus.STATUSCODE == "210") {
                _this.helperservice.backtohome();
            }
            else {
                _this.card_details = "";
                _this.card_image = "assets/imgs/business_card_no_image.png";
                _this.card_company = "Company details not given";
                _this.card_email = "Details Not Availabel";
                _this.card_firstName = "Details Not Availabel";
                _this.card_lastName = "Details Not Availabel";
                _this.card_mobile = "";
                _this.card_phone = "";
                _this.card_position = "Position not given";
            }
        }, function (err) {
            _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
        });
        console.log('ionViewDidLoad BussinesscardDetailsPage');
    };
    // gobussinesscardeditpage() {
    //   this.navCtrl.push(BussinesscardEditPage);
    // }
    // go to edit card
    BussinesscardDetailsPage.prototype.edit_card = function (cardid) {
        //console.log(this.card_details);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bussinesscard_edit_bussinesscard_edit__["a" /* BussinesscardEditPage */], { card_details: this.card_details });
    };
    // delete this card
    BussinesscardDetailsPage.prototype.delete_this = function (cardid) {
        var _this = this;
        var delete_card = {
            'sessionId': localStorage.getItem('customerSessionId'),
            'osVersion': this.osversion,
            'appVersion': '1.0',
            'customerId': localStorage.getItem("customerId"),
            'os': 'Web',
            'cardId': this.cardid,
            'locale': 'en'
        };
        var alert = this.helperservice.showConfirmAlert('Delete buisness card', 'Are you sure you want to permanently delete this buisness card ?');
        alert.present();
        alert.onDidDismiss(function (data) {
            console.log('Yes/No', data);
            if (data == true) {
                console.log('Yes');
                var loadingPop_1 = _this.helperservice.createLoadingBar();
                loadingPop_1.present();
                _this.globalservice.delete_card(delete_card).subscribe(function (resp) {
                    loadingPop_1.dismiss();
                    console.log(resp);
                    // this.navCtrl.push(HomePage);
                    if (resp.responseStatus.STATUS == "SUCCESS") {
                        _this.navCtrl.pop();
                        _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    }
                    else {
                        _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    }
                }, function (err) {
                    _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
                });
            }
            else {
                console.log('No');
            }
        });
    };
    // go to upload page for crate new project or upload file with existing project
    BussinesscardDetailsPage.prototype.addtrack = function () {
        // 08 february 2019 6.33 pm {start}
        if (this.allowTilkee == false) {
            this.helperservice.sendalertmessage('bottom', this.tilkeeMsg);
        }
        if (this.allowTilkee == true) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addtrack_addtrack__["a" /* AddtrackPage */], { 'customerfirstname': this.card_firstName, 'customerlastname': this.card_lastName, 'customeremail': this.card_email, 'cardid': this.cardid, 'tilkee_project_id': this.projectId_tilkee });
        }
        // 08 february 2019 6.33 pm {end}
    };
    //import { MyAccountPage } from '../my-account/my-account';
    // GO TO DASHBOARD PAGE              
    BussinesscardDetailsPage.prototype.got_to_home = function () {
        var index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__my_account_my_account__["a" /* MyAccountPage */]);
    };
    // goToUrl(): void {
    //   let profileModal =  this.modalCtrl.create('TilkPreviewPage', { 'preview': '' });
    //         profileModal.present();
    //  // window.open("https://docs.tilkee.io/preview/OTdlMDM2YWE0OA", "", "width=100, height=100");
    // }
    // goTonewUrl(): void
    // {
    //   window.open("https://docs.tilkee.io/preview/OTdlMDM2YWE0OA", "", "width=100, height=100");
    // }
    // got to statistics page 
    // view_stat_details(tilk_id)
    // {
    //   let profileModal = this.modalCtrl.create('TilkStatPage', { 'projectid': this.projectId_tilkee,'id_connexion':tilk_id });
    //   profileModal.present();
    // }
    // got to tilkee  statistics page 
    BussinesscardDetailsPage.prototype.getstat = function (projectid, projectname) {
        //this.navCtrl.push('projectstat',{projectid:projectid,projectname:projectname})
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__project_stat_project_stat__["a" /* ProjectStatPage */], { projectid: projectid, projectname: projectname });
    };
    BussinesscardDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
        /**
         * Generated class for the BussinesscardDetailsPage page.
         *
         * See https://ionicframework.com/docs/components/#navigation for more info on
         * Ionic pages and navigation.
         */
        ,
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bussinesscard-details',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/bussinesscard-details/bussinesscard-details.html"*/'<!--\n  Generated template for the BussinesscardDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Business card details</ion-title>\n      \n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    \n    <div class="container">\n      <div class="bussiness-card-top-box">\n  \n        <ion-grid>\n          <ion-row>\n            <ion-col col-12>\n                <div class="trac-doc-wrap">\n                    <h2>Card details</h2>\n                    <div class="icon edit-del-wrap">\n                        <!-- <div class="edit-bt"><span></span></div>\n                        <div class="del-bt"><span></span></div>   -->\n                        <div class="text-right">\n                            <span (click)="edit_card(cardid)" class="edit"><span></span></span>\n                          </div>\n                          <div class="text-right">\n                            <span (click)="delete_this(cardid)" class="delete"><span></span></span>\n                          </div>\n                      </div>\n                  </div>\n              <div class="card_blok">\n                <ion-grid>\n                  <ion-row>\n                    \n                    <ion-col col-4 col-xs-12 no-padding class="card_area">\n                      <img src="{{card_image}}" alt="" imageViewer />\n                    </ion-col>\n                    <ion-col col-6 no-padding class="card_details contact_info">\n                      <h1>{{card_firstName}} {{card_lastName}}</h1>\n                      <p>{{card_position}} {{card_company}}</p>\n                    <p class="tel"><a type="tel" href="tel:{{card_mobile}}">{{card_mobile}}</a></p>\n                    <p class="tel"> <a type="tel" href="tel:{{card_phone}}">{{card_phone}}</a></p>\n                    <p class="mail"><a  href="mailto:{{card_email}}">{{card_email}}</a></p>\n                    </ion-col>\n  \n  \n                  </ion-row>\n                </ion-grid>\n                \n              </div>\n  \n  \n  \n            </ion-col>\n  \n  \n  \n            <ion-col col-12>\n              <div class="internert_wrap">\n                <div class="trac-doc-wrap">\n                  <h2>Track document</h2>\n                  <ion-icon style="cursor: pointer;" (click)="addtrack()" name="add-circle" ios="ios-add-circle-outline" md="ios-add-circle-outline"></ion-icon>\n                </div>\n                <div class="internet_table">\n                <table>\n                  <tbody>\n                    <tr>\n                      <th sty width="128">Interet</th>\n                      <th width="268">Nom</th>\n                      <th width="127">Duree</th>\n                      <th width="140">Dernier Acces</th>\n                      <th width="140">Connexion</th>\n                    </tr>\n                  \n                   \n                    <tr (click)="getstat(data.project_id,data.project_name)" [ngClass]="tik_list_stat!=\'\' ? \'showcell\' : \'hidecell\'"  *ngFor ="let data of tik_list_stat">\n                       \n                            <td width="128"><span class="circle">{{data.interest}}</span></td>\n                            <td width="268">\n                              <p>{{data.project_name}}</p>\n                              <!-- <p>{{card_firstName}} {{card_lastName}}</p> -->\n                            </td>\n                            <td width="127">{{data.total_time | milisecondtotime}}</td>\n                            <td width="140" *ngIf="data.last_sign_in_at!=null">{{ data.last_sign_in_at | dateformatter }}</td>\n                            <td width="140" *ngIf="data.last_sign_in_at==null"></td>\n                            <td width="140">{{data.nb_connections}} fois</td>\n                         \n                     \n                    </tr>\n                 \n                      <tr [ngClass]="tik_list_stat==\'\' ? \'showcell\' : \'hidecell\'">\n                        <td colspan="5">No project created</td>\n                      </tr>\n                        \n                  \n                 \n                      \n                    \n                  </tbody>\n                </table>\n              </div>\n              </div>\n            </ion-col>\n  \n          </ion-row>\n        </ion-grid>\n  \n      </div>\n    </div>\n    <ion-fab right bottom class="home-menu"> \n      <button ion-fab color="danger" (click)="got_to_home()"><ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon></button>\n    </ion-fab>\n    <!-- <button type="button" (click)="goToUrl()">Click me!</button>\n\n    <button type="button" (click)="goTonewUrl()">Click me!</button> -->\n  </ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/bussinesscard-details/bussinesscard-details.html"*/,
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__angular_common__["DOCUMENT"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], Object, __WEBPACK_IMPORTED_MODULE_4__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], BussinesscardDetailsPage);
    return BussinesscardDetailsPage;
}());

//# sourceMappingURL=bussinesscard-details.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtrackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trackfilepreview_trackfilepreview__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_account_my_account__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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
 * Generated class for the AddtrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddtrackPage = /** @class */ (function () {
    function AddtrackPage(globalservice, helperservice, navCtrl, navParams) {
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customerFirstName = '';
        this.titel = '';
        this.file_check = '';
        this.file_ext = '';
        this.tilk_proj_id = '';
        this.minDate = __WEBPACK_IMPORTED_MODULE_6_moment__().add(1, 'day').format('YYYY-MM-DD');
        this.customerFirstName = this.navParams.get('customerfirstname') + " " + this.navParams.get('customerlastname');
        this.customeremail = this.navParams.get('customeremail');
        this.tilk_proj_id = this.navParams.get('tilkee_project_id');
        this.cardid = this.navParams.get('cardid');
        this.projedct_name = this.customerFirstName + '-' + this.customeremail;
        // console.log("prject name :- " + this.projedct_name + "card id :-" + this.cardid + "existing tilkee id :-" + this.tilk_proj_id);
        //<name of customer>-<name of email>
    }
    AddtrackPage.prototype.ionViewWillEnter = function () {
        // var today = new Date().toISOString().split('T')[0];
        // console.log('cx');
        // document.getElementById("#txtDate")[0].setAttribute('min', today);
    };
    AddtrackPage.prototype.ionViewDidLoad = function () {
    };
    // AFTER SUBMIT PROJECT CREATE FORM IN TILKEE ITS GOES TO PROJECT PREVIEW PAGE WHICH IS
    // GENERATED TILKEE SERVER .
    AddtrackPage.prototype.gototrackpreview = function () {
        var _this = this;
        var extensionarray = ["doc", "docx", "pdf", "jpeg", "jpg", "png", "bmp"];
        //var isexist = extensionarray.indexOf("pdf");
        // console.log(isexist)
        // var q = new Date();
        // var m = q.getMonth();
        // var d = q.getDay();
        // var y = q.getFullYear();
        if (this.expirationdate != undefined) {
            this.mydate = new Date(this.expirationdate);
            console.log(this.mydate);
        }
        var date = new Date();
        var res = this.file_check.split(".");
        this.file_ext = res[1];
        console.log(this.file_ext);
        var titelvalue = this.titel.trim();
        console.log(titelvalue);
        var CharArray = titelvalue.split(" ");
        if (CharArray.length > 1) {
            //console.warn("User name NOT VALID");
            // return false;
        }
        else {
            // console.log("User name  VALID");
        }
        if (this.customerFirstName == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your  name');
        }
        else if (this.customeremail == undefined || this.customeremail == null || this.customeremail == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your email');
        }
        else if (!new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.customeremail)) {
            this.helperservice.sendalertmessage('bottom', 'Please enter proper email ');
        }
        else if (this.titel == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter file title');
        }
        else if (this.file_check == '') {
            //console.log(this.file_check);
            var res = this.file_check.split(".");
            this.file_ext = res[1];
            this.helperservice.sendalertmessage('bottom', 'Please add  project file ');
        }
        else if (this.expirationdate != undefined && date > this.mydate) {
            this.helperservice.sendalertmessage('bottom', 'Please enter expiration date grater then today ');
        }
        else if (extensionarray.indexOf(this.file_ext) == -1) {
            this.helperservice.sendalertmessage('bottom', 'File not supported [Note : Allowed Extension:doc,docx, pdf, txt ,jpeg ,jpg,png,bmp] ');
        }
        else {
            var loadingPop_1 = this.helperservice.createLoadingBar();
            loadingPop_1.present();
            if (this.tilk_proj_id == "") {
                //console.log("if part excuted");
                if (this.expirationdate != undefined) {
                    var duratio = this.getDiferenceInDays(this.expirationdate);
                    // console.log(duratio)
                    this.project = {
                        'name': this.projedct_name,
                        'archived_at': '',
                        'can_be_downloaded': '',
                        'duration': duratio,
                        'external_id': ''
                    };
                }
                else {
                    this.expirationdate = '';
                    this.project = {
                        'name': this.projedct_name,
                        'archived_at': '',
                        'can_be_downloaded': '',
                        'duration': '',
                        'external_id': ''
                    };
                }
                this.globalservice.addproject(this.project).subscribe(function (resp) {
                    //loadingPop.dismiss();
                    //this.navCtrl.push('tilkee_api_integration');
                    if (resp.id != "") {
                        var add_tilkee_response = {
                            'sessionId': localStorage.getItem('customerSessionId'),
                            'osVersion': localStorage.getItem('osVersion'),
                            'appVersion': '1.0',
                            'customerId': localStorage.getItem('customerId'),
                            'os': 'Web',
                            'cardId': _this.cardid,
                            'locale': 'eng',
                            'contactName': _this.customerFirstName,
                            'contactEmail': _this.customeremail,
                            'expiryDate': _this.expirationdate,
                            'tilkeeFile': _this.image_base64_raw,
                            'tilkeeFileExt': _this.file_ext,
                            'title': _this.titel,
                            'projectId': resp.id
                        };
                        _this.added_project_in_tilkee_id = resp.id;
                        console.log(add_tilkee_response);
                        console.log(add_tilkee_response);
                        _this.globalservice.add_tilkee_Project_Details_localserver(add_tilkee_response).subscribe(function (resp) { console.log(resp); });
                        _this.globalservice.tilkeedirectupload(_this.file_ext, _this.titel).subscribe(function (resp) {
                            _this.globalservice.uploaddata_intoamazonserver(_this.selectedFile, resp).subscribe(function (resp) {
                                console.log(resp);
                                var parser = new DOMParser();
                                var doc = parser.parseFromString(resp, "text/xml");
                                var url = doc.getElementsByTagName("Location")[0].childNodes[0].nodeValue;
                                console.log("location" + url);
                                var externalid = Math.floor((Math.random() * 9999) + 1000);
                                var addcontentlink = [{
                                        "file_size": null,
                                        "name": _this.titel,
                                        "from_url": true,
                                        "s3_url": url,
                                        "url": url,
                                        "type": "file",
                                        "external_id": ""
                                    }];
                                console.log(addcontentlink);
                                _this.globalservice.addfile(addcontentlink).subscribe(function (resp) {
                                    console.log(resp);
                                    //this.navCtrl.push('tilkee_api_integration');
                                    if (resp.id != "") {
                                        var addfiledata = {
                                            "file_id": resp[0].id,
                                            "title": _this.titel,
                                            "project_id": _this.added_project_in_tilkee_id
                                        };
                                        _this.globalservice.addfiletoproject(addfiledata).subscribe(function (response) {
                                            console.log(response);
                                            if (response[0].id != "") {
                                                loadingPop_1.dismiss();
                                                _this.helperservice.sendalertmessage('bottom', 'File added sucessfully with this project  ');
                                                console.log('ccxcx');
                                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__trackfilepreview_trackfilepreview__["a" /* TrackfilepreviewPage */], { 'tilkee_project_id': _this.added_project_in_tilkee_id, 'customername': _this.customerFirstName, 'customeremail': _this.customeremail, 'cardId': _this.cardid });
                                            }
                                        }, function (err) {
                                            loadingPop_1.dismiss();
                                            _this.helperservice.sendalertmessage('bottom', err);
                                        });
                                        //this.helperservice.sendalertmessage('bottom', 'File Uploaded Sucessfully');
                                        //this.navCtrl.push('tilkee_api_integration');  
                                        // this.navCtrl.push('list_projects');
                                    }
                                    else {
                                        _this.helperservice.sendalertmessage('bottom', 'File not uploaded from link');
                                        //this.navCtrl.push('list_projects');
                                        loadingPop_1.dismiss();
                                    }
                                }, function (err) {
                                    _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
                                });
                            }, function (err) {
                                loadingPop_1.dismiss();
                                _this.helperservice.sendalertmessage('bottom', 'Failure ,File  not uploaded in amazon server');
                            });
                        }, function (err) {
                            loadingPop_1.dismiss();
                            _this.helperservice.sendalertmessage('bottom', 'Failure ,File space and signature not created amazon server');
                        });
                    }
                    else {
                        loadingPop_1.dismiss();
                        _this.helperservice.sendalertmessage('bottom', 'Failure ,Project Not Created');
                    }
                }, function (err) {
                    loadingPop_1.dismiss();
                    _this.helperservice.sendalertmessage('bottom', 'project Not Created');
                });
            }
            else {
                console.log("else part excuted");
                this.added_project_in_tilkee_id = this.tilk_proj_id;
                // signature key and policy genaration for amazon s3 server
                this.globalservice.tilkeedirectupload(this.file_ext, this.titel).subscribe(function (resp) {
                    console.log(resp);
                    // upload data into amazon server
                    _this.globalservice.uploaddata_intoamazonserver(_this.selectedFile, resp).subscribe(function (resp) {
                        console.log(resp);
                        var parser = new DOMParser();
                        var doc = parser.parseFromString(resp, "text/xml");
                        var url = doc.getElementsByTagName("Location")[0].childNodes[0].nodeValue;
                        console.log("location" + url);
                        // // add file to tilkee
                        var externalid = Math.floor((Math.random() * 9999) + 1000);
                        var addcontentlink = [{
                                "file_size": null,
                                "name": _this.file_check,
                                "from_url": true,
                                "s3_url": url,
                                "url": url,
                                "type": "file",
                            }];
                        console.log(addcontentlink);
                        _this.globalservice.addfile(addcontentlink).subscribe(function (resp) {
                            console.log(resp);
                            //this.navCtrl.push('tilkee_api_integration');
                            if (resp.id != "") {
                                var addfiledata = {
                                    "file_id": resp[0].id,
                                    "title": _this.titel,
                                    "project_id": _this.added_project_in_tilkee_id
                                };
                                _this.globalservice.addfiletoproject(addfiledata).subscribe(function (response) {
                                    console.log(response);
                                    if (response[0].id != "") {
                                        loadingPop_1.dismiss();
                                        _this.helperservice.sendalertmessage('bottom', 'File added sucessfully with this project  ');
                                        console.log('ccxcx');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__trackfilepreview_trackfilepreview__["a" /* TrackfilepreviewPage */], { 'tilkee_project_id': _this.added_project_in_tilkee_id, 'customername': _this.customerFirstName, 'customeremail': _this.customeremail, 'cardId': _this.cardid });
                                    }
                                }, function (err) {
                                    loadingPop_1.dismiss();
                                    _this.helperservice.sendalertmessage('bottom', err);
                                });
                                //this.helperservice.sendalertmessage('bottom', 'File Uploaded Sucessfully');
                                //this.navCtrl.push('tilkee_api_integration');  
                                // this.navCtrl.push('list_projects');
                            }
                            else {
                                _this.helperservice.sendalertmessage('bottom', 'File not uploaded from link');
                                //this.navCtrl.push('list_projects');
                                loadingPop_1.dismiss();
                            }
                        }, function (err) {
                            _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
                        });
                    }, function (err) {
                    });
                }, function (err) { console.log(err); });
            }
        }
        // else if(this.file_ext!= "jpg" && this.file_ext!= "png" && this.file_ext!='pdf'  && this.file_ext!='docx' && this.file_ext!='doc' && this.file_ext!='txt' && this.file_ext!='docx' )
        //  this.navCtrl.push(TrackfilepreviewPage);
    };
    // ITS USED TO CONVERT FILE TO BASE 64 ENCODED FORMAT
    AddtrackPage.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(event);
        console.log(event.target.files[0].name);
        this.file_check = event.target.files[0].name;
        var res_img = this.file_check.split(".");
        this.file_ext = res_img[1];
        /// convert it into base 64
        var files = event.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    // GO TO DASHBOARD PAGE
    AddtrackPage.prototype.got_to_home = function () {
        var index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__my_account_my_account__["a" /* MyAccountPage */]);
    };
    // CREATE DATE DIFFERENCE BETWEEN DATE
    AddtrackPage.prototype.getDiferenceInDays = function (theDate) {
        //our custom function with two parameters, each for a selected date
        console.log(Date.parse(theDate));
        console.log(typeof theDate);
        var diffc = Date.parse(theDate) - new Date().getTime();
        //getTime() function used to convert a date into milliseconds. This is needed in order to perform calculations.
        var days = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
        //this is the actual equation that calculates the number of days.
        return days;
        //return Math.abs(theDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24) ;
    };
    AddtrackPage.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.image_base64_raw = btoa(binaryString);
        //this. img_ext_raw = "png" ;
        //this.base64textString= 'data:image/png;base64,' + btoa(binaryString);
        // console.log(btoa(binaryString));
    };
    AddtrackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addtrack',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/addtrack/addtrack.html"*/'<!--\n  Generated template for the AddtrackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add file</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="container">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n             \n              <div class="profile-form-wrap">\n                <ion-list>\n                    <div class="static_col">\n                      <h5>Customer name</h5>\n                      <ion-item>\n                        <ion-input type="text" name="customerFirstName" [(ngModel)]="customerFirstName" placeholder="Customer name" disabled ></ion-input>\n                        <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n                      </ion-item>\n                    </div>\n                    <div class="static_col">\n                        <h5>Customer email</h5>\n                      <ion-item>\n                        <ion-input type="email" name="customeremail" [(ngModel)]="customeremail" placeholder="Customer email" disabled></ion-input>\n                        <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-6.png" alt=""></ion-label>\n                      </ion-item>\n                    </div>\n                    <div class="static_col">\n                        <h5>Title</h5>\n                      <ion-item>\n                        <ion-input type="text" name="titel" [(ngModel)]="titel" placeholder="Title"></ion-input>\n                        <ion-label class="mail-icon-wrap"><img src="assets/imgs/name.png" alt=""></ion-label>\n                      </ion-item>\n                    </div>\n                    <!-- <div class="static_col">\n                      <ion-item>\n                        <ion-input type="text" value="Logo enterprise"> </ion-input>\n                        <ion-label class="mail-icon-wrap"><img src="assets/imgs/lock.png" alt=""></ion-label>\n                      </ion-item>\n                    </div> -->\n                    <div class="static_col">\n                        <h5>Expiration date</h5>\n                      <ion-item>\n                        <ion-datetime displayFormat="DD-MM-YYYY"  id="txtDate"  name="expirationdate" [(ngModel)]="expirationdate" placeholder="Expiration date" max="2030-12-31" [min]="minDate"></ion-datetime>\n\n                        <!-- <ion-datetime name="expirationdate" [(ngModel)]="expirationdate" displayFormat="DD-MM-YYYY" pickerFormat="DD-MM-YYYY"  placeholder="Expiration date" max="2030-12-31" min="2018-04-12" ></ion-datetime> -->\n\n                         <!-- <ion-input type="date" id="txtDate"  name="expirationdate" [(ngModel)]="expirationdate" placeholder="Expiration date"></ion-input>  -->\n                        <ion-label class="mail-icon-wrap"><img src="assets/imgs/calendar.png" alt=""></ion-label>\n                      </ion-item>\n                    </div>\n                    \n                    <div class="static_col">\n                        <div class="output"> {{ file_check }} </div>\n                        <h5>File</h5>\n                      <div class="file-upload">\n                        <input (change)="onFileChanged($event)" type="file"   accept="application/docx, \n                        text/plain, application/pdf,image/*" capture="filesystem"  multiple="multiple"> \n                        <!-- <input \n                        type="file"\n                        class="form-control-file"\n                        id="sizeRestrictedFileInput"\n                        name="sizeRestrictedFile"\n                        #sizeRestrictedFileInput="ngModel"\n                        #sizeRestrictedHtmlElement\n                        [(ngModel)]="sizeRestrictedFile"\n                        [ng2FileSize]="sizeRestrictions"\n                        [fileSizeErrorMsg]="errorMessage"\n                        #ng2fsd="ng2FileSizeDirective"                    \n                    /> -->\n                        \n                      </div>\n                      <ion-item>\n                        <ion-input type="text" name="customerEmail" placeholder="File"></ion-input>\n                        \n                        <ion-label class="mail-icon-wrap"><img src="assets/imgs/upload.png" alt=""></ion-label>\n                      </ion-item>\n\n                      \n                    </div>\n\n                  \n                    <div class="static_col" style="display: none;">\n                      <ion-item><ion-input name="customerPosition"  placeholder="Position"></ion-input></ion-item>\n                    </div>\n                  </ion-list>\n                  \n                <button class="log-in-bt" type="submit" (click)="gototrackpreview()">Next</button>\n\n                \n              </div>\n            </ion-col>  \n          </ion-row>\n        </ion-grid>\n    \n      </div>\n\n      <ion-fab  right bottom class="home-menu"> \n        <button  ion-fab color="danger" (click)="got_to_home()"><ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon></button>\n      </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/addtrack/addtrack.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_3__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], AddtrackPage);
    return AddtrackPage;
}());

//# sourceMappingURL=addtrack.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackfilepreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bussinesscard_bussinesscard__ = __webpack_require__(51);
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
 * Generated class for the TrackfilepreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackfilepreviewPage = /** @class */ (function () {
    function TrackfilepreviewPage(modalCtrl, globalservice, helperservice, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customerName = '';
        this.tilk_proj_id = this.navParams.get('tilkee_project_id');
        this.customerName = this.navParams.get('customername');
        this.customeremail = this.navParams.get('customeremail');
        this.cardId = this.navParams.get('cardId');
        console.log("no of element in nava stack : " + this.navCtrl.getActive().index);
    }
    TrackfilepreviewPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // before create tilk search tilk already craeted or not 
        var loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();
        this.globalservice.tilk_creted_search(this.tilk_proj_id, this.customerName).subscribe(function (response) {
            loadingPop.dismiss();
            if (response.total > 0) {
                console.log('tilk exist');
                _this.link = response.contents;
                _this.sharabel_url = _this.link[0].link;
                console.log(_this.link[0].preview_url);
                console.log(_this.link[0].preview_url);
            }
            else {
                console.log('tilk new create');
                var generatelinkjson = {
                    "persons": [
                        { "name": _this.customerName }
                    ]
                };
                _this.globalservice.generatelink(generatelinkjson, _this.tilk_proj_id).subscribe(function (response) {
                    loadingPop.dismiss();
                    if (response.length != 0) {
                        console.log(response.contents);
                        _this.link = response.contents;
                        _this.sharabel_url = _this.link[0].link;
                        console.log(_this.link[0].preview_url);
                    }
                    else {
                    }
                }, function (err) {
                    _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
                });
            }
        }, function (err) {
            _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
        });
    };
    TrackfilepreviewPage.prototype.ionViewDidLoad = function () {
        this.setBackButtonAction();
        console.log('ionViewDidLoad TrackfilepreviewPage');
    };
    TrackfilepreviewPage.prototype.view_preview = function () {
        // let profileModal = this.modalCtrl.create('TilkPreviewPage', { 'preview': this.link[0].preview_url });
        //   profileModal.present();
        window.open(this.link[0].preview_url, '_blank');
    };
    TrackfilepreviewPage.prototype.send_link = function () {
        var _this = this;
        var alert = this.helperservice.showConfirmAlert('Confirm!', 'Are you sure you want to send this link ?');
        alert.present();
        alert.onDidDismiss(function (data) {
            console.log('Yes/No', data);
            if (data == true) {
                var sendurltoclient = {
                    'sessionId': localStorage.getItem('customerSessionId'),
                    'osVersion': localStorage.getItem('osVersion'),
                    'appVersion': '1.0',
                    'customerId': localStorage.getItem("customerId"),
                    'os': 'Web',
                    'cardId': _this.cardId,
                    'locale': 'eng',
                    'contactName': _this.customerName,
                    'contactEmail': _this.customeremail,
                    'customerName': _this.customeremail,
                    'tilkeeFileUrl': _this.sharabel_url,
                    'projectId': _this.tilk_proj_id,
                };
                console.log(sendurltoclient);
                _this.globalservice.sendurltocustomer(sendurltoclient).subscribe(function (resp_data) {
                    console.log(resp_data);
                    if (resp_data.responseStatus.STATUS == "SUCCESS") {
                        _this.helperservice.sendalertmessage('bottom', resp_data.responseStatus.MESSAGE);
                        var index = _this.navCtrl.getActive().index;
                        _this.navCtrl.remove(0, index);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bussinesscard_bussinesscard__["a" /* BussinesscardPage */]);
                    }
                }, function (err) {
                    _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
                });
            }
            else {
                console.log('No');
            }
        });
    };
    //Method to override the default back button action
    TrackfilepreviewPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            console.log("backbutton fire");
            //Write here wherever you wanna do
            var index = _this.navCtrl.getActive().index;
            console.log(index);
            // this.navCtrl.remove(0, index+1);
            _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 4));
            //this.navCtrl.push(BussinesscardPage);
        };
    };
    TrackfilepreviewPage.prototype.copyMessage = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.sharabel_url;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.helperservice.sendalertmessage('bottom', 'Copied to clipboard Success!');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Navbar */])
    ], TrackfilepreviewPage.prototype, "navBar", void 0);
    TrackfilepreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trackfilepreview',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/trackfilepreview/trackfilepreview.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Trackfile preview</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <div class="track-preview-wrap">\n              \n              <h2>{{sharabel_url}}</h2>\n            <a href="javascript:;" (click)="view_preview()" class="preview-bt">Preview</a>\n            <!-- <a href="javascript:;" (click)="send_link()"   class="send-bt">Send</a> -->\n            <a href="javascript:;" (click)="copyMessage()" class="send-bt">COPY THE LINK</a>\n              </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n \n</ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/trackfilepreview/trackfilepreview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], TrackfilepreviewPage);
    return TrackfilepreviewPage;
}());

//# sourceMappingURL=trackfilepreview.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__track_track__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bussinesscard_bussinesscard__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_account_my_account__ = __webpack_require__(20);
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
 * Generated class for the TrackfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage({name:'trackfile'})
var TrackfilePage = /** @class */ (function () {
    function TrackfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrackfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackfilePage');
    };
    TrackfilePage.prototype.createnewtrackfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bussinesscard_bussinesscard__["a" /* BussinesscardPage */]);
    };
    TrackfilePage.prototype.trackfileread = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__track_track__["a" /* TrackPage */], { 'read': 1 });
    };
    TrackfilePage.prototype.trackfilenotread = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__track_track__["a" /* TrackPage */], { 'read': 0 });
    };
    TrackfilePage.prototype.got_to_home = function () {
        var index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__my_account_my_account__["a" /* MyAccountPage */]);
    };
    TrackfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trackfile',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/trackfile/trackfile.html"*/'<!--\n  Generated template for the TrackfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Track a file</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="conatct_container">\n    <div class="container">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <div class="log-in-form-cont">\n\n              <h2>Choose your options accordingly</h2>\n\n              <form>\n                <ion-list>\n                  <div class="static_col">\n                    <button class="log-in-bt" (click)="createnewtrackfile();" type="submit">Create a new tracked file</button>\n                  </div>\n                  <div class="static_col">\n                    <button class="log-in-bt" (click)="trackfileread();" type="submit">Tracked file read</button>\n                  </div>\n               \n                  <div class="static_col">\n                    <button class="log-in-bt" (click)="trackfilenotread();" type="submit">Tracked file not read</button>\n                  </div>\n\n                  <!-- <div class="static_col">\n                    <button class="log-in-bt" type="submit">Draft</button>\n                  </div> -->\n                </ion-list>\n               \n\n\n              </form>\n\n\n\n            </div>\n\n            \n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n  <ion-fab  right bottom class="home-menu"> \n    <button  ion-fab color="danger" (click)="got_to_home()"><ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/trackfile/trackfile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], TrackfilePage);
    return TrackfilePage;
}());

//# sourceMappingURL=trackfile.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_value_global_value__ = __webpack_require__(17);
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
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(globalservice, helperservice, navCtrl, navParams) {
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {
            'email': ''
        };
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.changepassword = function () {
        var _this = this;
        if (this.user.email == undefined || this.user.email == null || this.user.email == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your email');
        }
        else if (!new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.user.email)) {
            this.helperservice.sendalertmessage('bottom', 'Please enter proper email ');
        }
        else {
            var objappVersion = navigator.appVersion;
            var objAgent = navigator.userAgent;
            var objbrowserName = navigator.appName;
            var objfullVersion = '' + parseFloat(navigator.appVersion);
            var objBrMajorVersion = parseInt(navigator.appVersion, 10);
            var objOffsetName, objOffsetVersion, ix;
            // In Chrome 
            if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
                objbrowserName = "Chrome";
                objfullVersion = objAgent.substring(objOffsetVersion + 7);
            }
            else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
                objbrowserName = "Microsoft Internet Explorer";
                objfullVersion = objAgent.substring(objOffsetVersion + 5);
            }
            else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
                objbrowserName = "Firefox";
            }
            else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
                objbrowserName = "Safari";
                objfullVersion = objAgent.substring(objOffsetVersion + 7);
                if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
                    objfullVersion = objAgent.substring(objOffsetVersion + 8);
            }
            else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) <
                (objOffsetVersion = objAgent.lastIndexOf('/'))) {
                objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
                objfullVersion = objAgent.substring(objOffsetVersion + 1);
                if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
                    objbrowserName = navigator.appName;
                }
            }
            // trimming the fullVersion string at semicolon/space if present
            if ((ix = objfullVersion.indexOf(";")) != -1)
                objfullVersion = objfullVersion.substring(0, ix);
            if ((ix = objfullVersion.indexOf(" ")) != -1)
                objfullVersion = objfullVersion.substring(0, ix);
            objBrMajorVersion = parseInt('' + objfullVersion, 10);
            if (isNaN(objBrMajorVersion)) {
                objfullVersion = '' + parseFloat(navigator.appVersion);
                objBrMajorVersion = parseInt(navigator.appVersion, 10);
            }
            //  let txt1 = 'Browser name = '+objbrowserName+'<br>'
            //  +'Full version  = '+objfullVersion+'<br>'
            //  +'Major version = '+objBrMajorVersion+'<br>'
            //  +'navigator.appName = '+navigator.appName+'<br>'
            //  +'navigator.userAgent = '+navigator.userAgent+'<br>'
            // ;
            this.osversion = objbrowserName + "_" + objfullVersion;
            var forgot_password = {
                'locale': 'eng',
                'customerEmail': this.user.email,
                'os': 'Web',
                'osVersion': this.osversion,
                'appVersion': "1.0",
            };
            var loadingPop_1 = this.helperservice.createLoadingBar();
            loadingPop_1.present();
            this.globalservice.forgotpassworddata(forgot_password).subscribe(function (resp) {
                loadingPop_1.dismiss();
                console.log(resp);
                if (resp.responseStatus.STATUS == "SUCCESS") {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
            }, function (err) {
                loadingPop_1.dismiss();
                _this.helperservice.sendalertmessage("bottom", "Something went wrong! please try again.");
            });
        }
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/forgot-password/forgot-password.html"*/'<!--\n  Generated template for the ForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Forgot password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="container">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <div class="login-page-wrapper">\n             <h2>Forgot your password ?</h2>\n            </div>\n            <div class="log-in-form-cont">\n              <ion-list>\n                <ion-item>\n                  <ion-input type="text" name="email" [(ngModel)]="user.email" placeholder="Enter your email address "></ion-input>\n                  <ion-label class="mail-icon-wrap"><img src="assets/imgs/mail-2.png" alt=""></ion-label>\n                </ion-item>\n                \n  \n              </ion-list>\n              <div class="log-in-bt" (click)="changepassword()">\n                Reset password\n              </div>\n             \n            \n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <!-- <button ion-button secondary menuToggle>Toggle Menu</button>  -->\n  </ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/forgot-password/forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_3__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_account_my_account__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_social_login__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import {
//   SocialLoginModule,
//   AuthService,
//   LinkedinLoginProvider
// } from "angular5-social-auth";
// new linkdin service 

var HomePage = /** @class */ (function () {
    // public linkdinloginbutton : any=0;             
    function HomePage(socialAuthService, menuCtrl, globalservice, helperservice, navCtrl) {
        this.socialAuthService = socialAuthService;
        this.menuCtrl = menuCtrl;
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.navCtrl = navCtrl;
        this.user = {
            'password': '',
            'email': ''
        };
        //this.menuCtrl.enable(false, 'myMenu');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // check state of th login using linkdin 
        this.socialAuthService.authState.subscribe(function (user) {
            _this.linkdin_user = user;
            _this.linkdin_loggedIn = (user != null);
        });
        console.log(this.linkdin_user);
        console.log(this.linkdin_loggedIn);
        // the root left menu should be disabled on this page
        var positon_one = navigator.userAgent.indexOf("(");
        var postion_last = navigator.userAgent.indexOf(")");
        var res = navigator.userAgent.slice(positon_one + 1, postion_last); //console.log(res);
        var res = navigator.userAgent.slice(positon_one + 1, postion_last); //console.log(res);
        var res_devicename = res.split(";");
        this.devicename = res_devicename[1];
        //console.log(txt);
        //console.log(this.devicename);
        // =======================================
        var objappVersion = navigator.appVersion;
        var objAgent = navigator.userAgent;
        var objbrowserName = navigator.appName;
        var objfullVersion = '' + parseFloat(navigator.appVersion);
        var objBrMajorVersion = parseInt(navigator.appVersion, 10);
        var objOffsetName, objOffsetVersion, ix;
        // In Chrome 
        if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
            objbrowserName = "Chrome";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
        }
        else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
            objbrowserName = "Microsoft Internet Explorer";
            objfullVersion = objAgent.substring(objOffsetVersion + 5);
        }
        else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
            objbrowserName = "Firefox";
        }
        else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
            objbrowserName = "Safari";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
            if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
                objfullVersion = objAgent.substring(objOffsetVersion + 8);
        }
        else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) <
            (objOffsetVersion = objAgent.lastIndexOf('/'))) {
            objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
            objfullVersion = objAgent.substring(objOffsetVersion + 1);
            if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
                objbrowserName = navigator.appName;
            }
        }
        // trimming the fullVersion string at semicolon/space if present
        if ((ix = objfullVersion.indexOf(";")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        if ((ix = objfullVersion.indexOf(" ")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        objBrMajorVersion = parseInt('' + objfullVersion, 10);
        if (isNaN(objBrMajorVersion)) {
            objfullVersion = '' + parseFloat(navigator.appVersion);
            objBrMajorVersion = parseInt(navigator.appVersion, 10);
        }
        //  let txt1 = 'Browser name = '+objbrowserName+'<br>'
        //  +'Full version  = '+objfullVersion+'<br>'
        //  +'Major version = '+objBrMajorVersion+'<br>'
        //  +'navigator.appName = '+navigator.appName+'<br>'
        //  +'navigator.userAgent = '+navigator.userAgent+'<br>'
        // ;
        this.osversion = objbrowserName + "_" + objfullVersion;
        this.browserDetails = objbrowserName;
        this.menuCtrl.enable(false, 'myMenu');
        console.log(this.menuCtrl.isEnabled('myMenu'));
        this.menuCtrl.swipeEnable(false, 'myMenu');
        if (localStorage.getItem("customerSessionId") == null || localStorage.getItem("customerSessionId") == "") {
            // this.navCtrl.setRoot(HomePage);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__my_account_my_account__["a" /* MyAccountPage */]);
        }
    };
    HomePage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving this page
        this.menuCtrl.enable(true, 'myMenu');
    };
    HomePage.prototype.gosignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.goforgotPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    HomePage.prototype.try_to_loggedin = function () {
        var _this = this;
        var randomstring = this.randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        this.rString = randomstring;
        if (this.user.email == undefined || this.user.email == null || this.user.email == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your email');
        }
        else if (!new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.user.email.trim())) {
            this.helperservice.sendalertmessage('bottom', 'Please enter proper email ');
        }
        else if (this.user.password == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your password');
        }
        else {
            console.log(this.rString);
            if ("deviceId" in localStorage) {
                this.rString = localStorage.getItem("deviceId");
            }
            else {
            }
            //  if(localStorage.getItem("deviceId")!="" || localStorage.getItem("deviceId")!=undefined )
            //  {
            //    console.log('old deviceid '+localStorage.getItem("deviceId"))
            //    console.log('did1'+this.rString);
            //  }
            //  else
            //  {
            //   //this.rString = randomstring
            //   console.log('did2'+this.rString);
            //  }
            var login_json = {
                'locale': 'eng',
                'customerEmail': this.user.email,
                'customerPassword': this.user.password,
                'deviceId': this.rString,
                'pushNotificationToken': '',
                'simOperatorName': '',
                'os': 'Web',
                'loginType': 'GEN',
                'osVersion': this.osversion,
                'appVersion': "1.0",
                'deviceName': this.devicename,
                'deviceAndroidID': "",
                'deviceWifiMacID': "",
                'simSerialNo': ""
            };
            console.log(login_json);
            var loadingPop_1 = this.helperservice.createLoadingBar();
            loadingPop_1.present();
            //   let TIME_IN_MS = 1500;
            //  setTimeout( () => {
            //     loadingPop.dismiss();
            //          this.navCtrl.setRoot(MyAccountPage);
            // }, TIME_IN_MS);
            this.globalservice.signin(login_json).subscribe(function (resp) {
                loadingPop_1.dismiss();
                console.log(resp);
                if (resp.responseStatus.STATUS == "SUCCESS") {
                    //  this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE
                    // );
                    localStorage.setItem("customerId", resp.responseData.customerId);
                    localStorage.setItem("customerEmail", resp.responseData.customerEmail);
                    localStorage.setItem("customerFirstName", resp.responseData.customerFirstName);
                    localStorage.setItem("customerLastName", resp.responseData.customerLastName);
                    localStorage.setItem("customerProfilePic", resp.responseData.customerProfilePic);
                    localStorage.setItem("customerSessionId", resp.responseData.customerSessionId);
                    localStorage.setItem('customerEnterprise', resp.responseData.customerEnterprise);
                    localStorage.setItem('customerPosition', resp.responseData.customerPosition);
                    localStorage.setItem('customerMobile', resp.responseData.customerMobile);
                    if ("deviceId" in localStorage) {
                        // this.rString = localStorage.getItem("deviceId")
                    }
                    else {
                        localStorage.setItem('deviceId', _this.rString);
                    }
                    // localStorage.setItem('deviceId',randomstring) ;
                    localStorage.setItem('customerPhone', resp.responseData.customerPhone);
                    localStorage.setItem('osVersion', _this.osversion);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__my_account_my_account__["a" /* MyAccountPage */]);
                }
                else {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
            }, function (err) {
                loadingPop_1.dismiss();
                _this.helperservice.sendalertmessage("bottom", "Something went wrong!Please try again.");
            });
        }
    };
    HomePage.prototype.golinkdin_signup = function (socialPlatform) {
        var _this = this;
        function randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i)
                result += chars[Math.floor(Math.random() * chars.length)];
            return result;
        }
        var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        // if(socialPlatform == "linkedin"){
        //   socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
        // }
        //console.log(this.linkdin_user);
        if (this.linkdin_loggedIn == false) {
            this.socialAuthService.signIn(__WEBPACK_IMPORTED_MODULE_7_ng4_social_login__["LinkedinLoginProvider"].PROVIDER_ID).then(function (userdata) {
                console.log("is back");
                console.log(socialPlatform + " sign in data : ", userdata);
                var cname = userdata.name.split(' ');
                if (localStorage.getItem("deviceId") != "") {
                    console.log('old deviceid ' + localStorage.getItem("deviceId"));
                    _this.rString = localStorage.getItem("deviceId");
                    console.log('did1' + _this.rString);
                }
                else {
                    _this.rString = rString;
                    console.log('did2' + _this.rString);
                }
                var linkdinlogin = {
                    'locale': 'eng',
                    'customerFirstName': cname[0],
                    'customerLastName': cname[1],
                    'customerEmail': userdata.email,
                    'deviceId': _this.rString,
                    'pushNotificationToken': '',
                    'simOperatorName': '',
                    'os': 'Web',
                    'profilePicUrl': userdata.photoUrl,
                    'registrationType': 'LINK',
                    'osVersion': _this.osversion,
                    'appVersion': '1.0',
                    'deviceName': _this.devicename,
                    'deviceAndroidID': "",
                    'deviceWifiMacID': "",
                    'simSerialNo': "",
                    'browserDetails': _this.browserDetails,
                    'socialId': userdata.token
                };
                console.log(linkdinlogin);
                var loadingPop = _this.helperservice.createLoadingBar();
                loadingPop.present();
                _this.globalservice.customersociallogin(linkdinlogin).subscribe(function (resp) {
                    if (resp.responseStatus.STATUS == "SUCCESS") {
                        /* ====== if sucess add his member with tilkee===*/
                        //cname[0] cname[1] userdata.email
                        var addwithtilkee = {
                            "customerFirstName": cname[0],
                            "customerLastName": cname[1],
                            "customerEmail": userdata.email
                        };
                        _this.globalservice.signup_in_tilkee(addwithtilkee).subscribe(function (resp) {
                            console.log('tilkee user registration');
                            console.log(resp);
                        }, function (err) {
                            console.log(err);
                        });
                        /* ====== if sucess add his member with tilkee===*/
                        loadingPop.dismiss();
                        console.log(resp);
                        //  this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE
                        // );
                        localStorage.setItem("customerId", resp.responseData.customerId);
                        localStorage.setItem("customerEmail", resp.responseData.customerEmail);
                        localStorage.setItem("customerFirstName", resp.responseData.customerFirstName);
                        localStorage.setItem("customerLastName", resp.responseData.customerLastName);
                        localStorage.setItem("customerProfilePic", resp.responseData.customerProfilePic);
                        localStorage.setItem("customerSessionId", resp.responseData.customerSessionId);
                        localStorage.setItem('customerEnterprise', resp.responseData.customerEnterprise);
                        localStorage.setItem('customerPosition', resp.responseData.customerPosition);
                        localStorage.setItem('customerMobile', resp.responseData.customerMobile);
                        if (localStorage.getItem("deviceId") != "") {
                        }
                        else {
                            localStorage.setItem('deviceId', _this.rString);
                        }
                        localStorage.setItem('customerPhone', resp.responseData.customerPhone);
                        localStorage.setItem('osVersion', _this.osversion);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__my_account_my_account__["a" /* MyAccountPage */]);
                    }
                    else {
                        _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    }
                }, function (err) {
                    loadingPop.dismiss();
                    _this.helperservice.sendalertmessage("bottom", "Something went wrong!Please try again.");
                });
            });
        }
        else {
            console.log(' alredy logged in data');
            console.log(this.linkdin_user);
        }
        // this.socialAuthService.signIn(socialPlatformProvider).then(
        //   (userData) => {
        //     console.log("is back");
        //     console.log(socialPlatform+" sign in data : " , userData);
        //     console.log(userData.id);
        //     //let userdata = JSON.parse(userData)
        //     // Now sign-in with userData
        //      let cname = userData.name.split(' ')
        //      if(localStorage.getItem("deviceId")!="")
        //      {
        //        console.log('old deviceid '+localStorage.getItem("deviceId"))
        //        this.rString = localStorage.getItem("deviceId")
        //        console.log('did1'+this.rString);
        //      }
        //      else
        //      {
        //       this.rString = rString
        //       console.log('did2'+this.rString);
        //      }
        //     let linkdinlogin = {   'locale':'eng', 
        //                            'customerFirstName':cname[0],
        //                            'customerLastName':cname[1], 
        //                            'customerEmail':userData.email,
        //                            'deviceId':this.rString,
        //                            'pushNotificationToken':'',
        //                            'simOperatorName':'',
        //                            'os':'Web',
        //                            'profilePicUrl':userData.image,
        //                            'registrationType': 'LINK',
        //                            'osVersion':this.osversion,
        //                            'appVersion':'1.0',
        //                            'deviceName':this.devicename,
        //                            'deviceAndroidID':"",
        //                            'deviceWifiMacID':"",
        //                            'simSerialNo':"",
        //                            'browserDetails':this.browserDetails,
        //                            'socialId':userData.id
        //                         }
        //           console.log(linkdinlogin) ;   
        //           let loadingPop = this.helperservice.createLoadingBar();
        //           loadingPop.present();
        //           this.globalservice.customersociallogin(linkdinlogin).subscribe(
        //             (resp)=>{if (resp.responseStatus.STATUS=="SUCCESS")
        //             {
        //               loadingPop.dismiss();
        //              console.log(resp);
        //             //  this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE
        //             // );
        //              localStorage.setItem("customerId" , resp.responseData.customerId);
        //              localStorage.setItem("customerEmail" , resp.responseData.customerEmail);
        //              localStorage.setItem("customerFirstName" ,  resp.responseData.customerFirstName);
        //              localStorage.setItem("customerLastName" , resp.responseData.customerLastName);
        //              localStorage.setItem("customerProfilePic" , resp.responseData.customerProfilePic);
        //              localStorage.setItem("customerSessionId" , resp.responseData.customerSessionId);
        //              localStorage.setItem('customerEnterprise',resp.responseData.customerEnterprise);
        //              localStorage.setItem('customerPosition',resp.responseData.customerPosition);
        //              localStorage.setItem('customerMobile',resp.responseData.customerMobile);
        //              if(localStorage.getItem("deviceId")!="")
        //        {
        //        }
        //        else
        //        {
        //         localStorage.setItem('deviceId',this.rString) ;
        //        }
        //              localStorage.setItem('customerPhone',resp.responseData.customerPhone);
        //              localStorage.setItem('osVersion',this.osversion);
        //              this.navCtrl.setRoot(MyAccountPage);     
        //            }
        //           else
        //              {
        //                this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
        //             }},(err)=>{loadingPop.dismiss();
        //               this.helperservice.sendalertmessage("bottom","Something went wrong!Please try again.");}
        //           )
        //   }
        // );
    };
    HomePage.prototype.randomString = function (length, chars) {
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/home/home.html"*/'<ion-content padding class="bg">\n  <div class="container">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <div class="login-page-wrapper">\n            <a> <img src="assets/imgs/logo.png" alt=""></a>\n          </div>\n          <div class="log-in-form-cont">\n            <ion-list>\n              <ion-item>\n                <ion-input type="text" name="username" [(ngModel)]="user.email" placeholder="Email"></ion-input>\n                <ion-label class="mail-icon-wrap"><img src="assets/imgs/mail-2.png" alt=""></ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="password" name="userpassword"  [(ngModel)]="user.password" placeholder="Password"></ion-input>\n                <ion-label class="lock-icon-wrap"><img src="assets/imgs/lock.png" alt=""></ion-label>\n              </ion-item>\n            </ion-list>\n\n            <button class="log-in-bt" (click)="try_to_loggedin()">Login</button>\n            <a href="#" class="forgot-pass" (click)="goforgotPass()">Forgot Password ?</a>\n            <div class="or-wrap"><span>OR</span></div>\n            <ion-row class="link-bt-cont ">\n              <ion-col col-6> <button class="linkedin-bt" (click)="golinkdin_signup(\'linkedin\')"><div class="linkedin-bt-icon-wrap"><img src="assets/imgs/linkedin.png" alt=""></div>Sign up with Linkedin </button></ion-col>\n              <ion-col col-6> <button class="linkedin-bt sign-up-bt" (click)="gosignup()"><div class="linkedin-bt-icon-wrap"><img src="assets/imgs/sign-up.png" alt=""></div>Sign up </button></ion-col>\n              <!-- <ion-col col-12> <button class="sign-up-bt-bt" (click)="gosignup()">Sign up</button></ion-col> -->\n            </ion-row>\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n  </div>\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button>  -->\n</ion-content>\n  \n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ng4_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_5__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_account_my_account__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_image_compress__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_image_compress__);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(imgCompressService, globalservice, helperservice, navCtrl, navParams) {
        this.imgCompressService = imgCompressService;
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.image_name = "";
        this.image_ext = "";
        this.showTitle = false;
        this.base64textString = "";
        this.user = {
            'customerId': localStorage.getItem("customerId"),
            'customerEmail': localStorage.getItem("customerEmail"),
            'customerFirstName': localStorage.getItem("customerFirstName"),
            'customerLastName': localStorage.getItem("customerLastName"),
            'customerProfilePic': localStorage.getItem("customerProfilePic"),
            'customerSessionId': localStorage.getItem("customerSessionId"),
            'customerEnterprise': localStorage.getItem("customerEnterprise"),
            'customerPosition': localStorage.getItem('customerPosition'),
            'customerMobile': localStorage.getItem("customerMobile"),
            'customerPhone': localStorage.getItem("customerPhone")
        };
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem("customerId") != "" && localStorage.getItem("customerEmail") != "" && localStorage.getItem("customerSessionId") != "") {
            console.log('ionViewDidLoad ProfilePage');
            // console.log(this.base64textString);
            var objAgent = navigator.userAgent;
            var objbrowserName = navigator.appName;
            var objfullVersion = '' + parseFloat(navigator.appVersion);
            var objBrMajorVersion = parseInt(navigator.appVersion, 10);
            var objOffsetName, objOffsetVersion, ix;
            // In Chrome 
            if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
                objbrowserName = "Chrome";
                objfullVersion = objAgent.substring(objOffsetVersion + 7);
            }
            else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
                objbrowserName = "Microsoft Internet Explorer";
                objfullVersion = objAgent.substring(objOffsetVersion + 5);
            }
            else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
                objbrowserName = "Firefox";
            }
            else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
                objbrowserName = "Safari";
                objfullVersion = objAgent.substring(objOffsetVersion + 7);
                if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
                    objfullVersion = objAgent.substring(objOffsetVersion + 8);
            }
            else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) <
                (objOffsetVersion = objAgent.lastIndexOf('/'))) {
                objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
                objfullVersion = objAgent.substring(objOffsetVersion + 1);
                if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
                    objbrowserName = navigator.appName;
                }
            }
            // trimming the fullVersion string at semicolon/space if present
            if ((ix = objfullVersion.indexOf(";")) != -1)
                objfullVersion = objfullVersion.substring(0, ix);
            if ((ix = objfullVersion.indexOf(" ")) != -1)
                objfullVersion = objfullVersion.substring(0, ix);
            objBrMajorVersion = parseInt('' + objfullVersion, 10);
            if (isNaN(objBrMajorVersion)) {
                objfullVersion = '' + parseFloat(navigator.appVersion);
                objBrMajorVersion = parseInt(navigator.appVersion, 10);
            }
            this.osversion = objbrowserName + "_" + objfullVersion;
            //  alert(localStorage.getItem("customerEnterprise"));
            if (localStorage.getItem("customerEnterprise") == 'null') {
                this.user.customerEnterprise = "";
            }
            if (localStorage.getItem("customerPosition") == 'null') {
                this.user.customerPosition = "";
            }
            if (localStorage.getItem("customerPhone") == 'null') {
                this.user.customerPhone = "";
            }
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    };
    ProfilePage.prototype.onFileChanged = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        var fileList;
        var images = [];
        __WEBPACK_IMPORTED_MODULE_6_ng2_image_compress__["ImageCompressService"].filesToCompressedImageSource(event.target.files).then(function (observableImages) {
            observableImages.subscribe(function (image) {
                images.push(image);
            }, function (error) {
                console.log("Error while converting");
            }, function () {
                _this.processedImages = images;
                console.log("modifiedimage :");
                console.log(_this.processedImages);
                var str = _this.processedImages[0].compressedImage.imageDataUrl;
                var ix = str.indexOf(",");
                var objfullVersion = str.substring(ix + 1);
                console.log(objfullVersion);
                _this.image_name = objfullVersion;
                _this.base64textString = _this.processedImages[0].compressedImage.imageDataUrl;
                _this.showTitle = true;
            });
        });
        // console.log(this.selectedFile)
        var image_name = this.selectedFile.name;
        var res_img = image_name.split(".");
        this.image_ext = res_img[1];
        // console.log(this.image_ext);
        var files = event.target.files;
    };
    ProfilePage.prototype.update_profile = function () {
        var _this = this;
        // check any new image uploaded or not 
        if (this.image_name == "" && this.image_ext == "") {
            //   console.log('sasa');
            //   let imgstr = this.user.customerProfilePic;
            //   let  img_string =imgstr.lastIndexOf('/')+1
            //   let res = imgstr.substring(img_string);
            //   let img_ext = res.substring(res.lastIndexOf('.')+1) 
            //   let img_name = res.substring(0,res.lastIndexOf('.'))
            // //document.getElementById("demo").innerHTML = img_ext + img_name;
            // this.image_name = img_name ;
            // this.image_ext = img_ext ;
        }
        else {
            console.log('sasaddd');
            this.image_name = this.image_name;
            this.image_ext = this.image_ext;
        }
        if (this.user.customerFirstName == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your first name');
        }
        else if (this.user.customerLastName == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your last name');
        }
        else if (this.user.customerEmail == undefined || this.user.customerEmail == null || this.user.customerEmail == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your email');
        }
        else if (!new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.user.customerEmail)) {
            this.helperservice.sendalertmessage('bottom', 'Please enter proper email ');
        }
        else {
            var loadingPop_1 = this.helperservice.createLoadingBar();
            loadingPop_1.present();
            localStorage.getItem("deviceid");
            var update_json = {
                'locale': 'en',
                'customerFirstName': this.user.customerFirstName,
                'customerLastName': this.user.customerLastName,
                'customerEmail': this.user.customerEmail,
                'customerMobile': this.user.customerMobile,
                'customerPhone': this.user.customerPhone,
                'sessionId': this.user.customerSessionId,
                'customerEnterprise': this.user.customerEnterprise,
                'isPushNotification': 'N',
                'os': 'Web',
                'customerPosition': this.user.customerPosition,
                'profilePic': this.image_name,
                'profilePicExt': this.image_ext,
                'registrationType': 'GEN',
                'osVersion': this.osversion,
                'appVersion': '1.0',
                'customerId': this.user.customerId
            };
            console.log(update_json);
            this.globalservice.update_profile(update_json).subscribe(function (resp) {
                loadingPop_1.dismiss();
                console.log(resp);
                // this.navCtrl.push(HomePage);
                if (resp.responseStatus.STATUS == "SUCCESS") {
                    //this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE
                    //);
                    localStorage.setItem("customerId", resp.responseData.customerId);
                    localStorage.setItem("customerEmail", resp.responseData.customerEmail);
                    localStorage.setItem("customerFirstName", resp.responseData.customerFirstName);
                    localStorage.setItem("customerLastName", resp.responseData.customerLastName);
                    localStorage.setItem("customerProfilePic", resp.responseData.customerProfilePic);
                    // localStorage.setItem("customerSessionId" , resp.responseData.customerSessionId);
                    localStorage.setItem('customerEnterprise', resp.responseData.customerEnterprise);
                    localStorage.setItem('customerPosition', resp.responseData.customerPosition);
                    localStorage.setItem('customerMobile', resp.responseData.customerMobile);
                    localStorage.setItem('customerPhone', resp.responseData.customerPhone);
                    // this.navCtrl.push(ProfilePage); 
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
                else {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
            }, function (err) {
                _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
            });
        }
    };
    //import { MyAccountPage } from '../my-account/my-account';
    ProfilePage.prototype.got_to_home = function () {
        var index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__my_account_my_account__["a" /* MyAccountPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n    <!-- <button class="edit-pro"><img src="assets/imgs/tools.svg" alt=""></button> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class="profile-image-wrap">\n            <div class="profile-pic">\n                \n\n                <div *ngIf="base64textString !=\'\'" >\n                  \n                    <img src="{{base64textString}}" alt="">\n                  </div>\n                  <div *ngIf="base64textString ==\'\'" >\n                   \n                      <img  src="{{user.customerProfilePic}}" alt="">\n                    </div>\n\n                <input style="display: none"  type="file" accept="image/*" (change)="onFileChanged($event)" #fileInput> \n              <span (click)="fileInput.click()" > <ion-icon ios="md-create" md="md-create"></ion-icon></span>\n            </div>\n          </div>\n          <div class="profile-form-wrap">\n            <ion-list>\n                <div class="static_col">\n                  <ion-item>\n                    <ion-input type="text" name="customerFirstName" placeholder="First name" [(ngModel)]="user.customerFirstName"></ion-input>\n                    <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n                  </ion-item>\n                </div>\n                <div class="static_col">\n                  <ion-item>\n                    <ion-input type="text" name="customerLastName" placeholder="Last name" [(ngModel)]="user.customerLastName"></ion-input>\n                    <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-1.png" alt=""></ion-label>\n                  </ion-item>\n                </div>\n                <div class="static_col">\n                  <ion-item>\n                    <ion-input type="text" name="enterprice" placeholder="Enterprise" [(ngModel)]="user.customerEnterprise" ></ion-input>\n                    <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-2.png" alt=""></ion-label>\n                  </ion-item>\n                </div>\n                <!-- <div class="static_col">\n                  <ion-item>\n                    <ion-input type="text" value="Logo enterprise"> </ion-input>\n                    <ion-label class="mail-icon-wrap"><img src="assets/imgs/lock.png" alt=""></ion-label>\n                  </ion-item>\n                </div> -->\n                <div class="static_col">\n                  <ion-item>\n                    <ion-input name="customerPosition" placeholder="Position" [(ngModel)]="user.customerPosition"></ion-input>\n                    <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-3.png" alt=""></ion-label>\n                  </ion-item>\n                </div>\n                <div class="static_col">\n                  <ion-item>\n                    <ion-input type="number" name="customerMobile" placeholder="Mobile" [(ngModel)]="user.customerMobile"></ion-input>\n                    <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-4.png" alt=""></ion-label>\n                  </ion-item>\n                </div>\n                <div class="static_col">\n                  <ion-item>\n                    <ion-input  type="number" name="customerPhone" placeholder="Phone" [(ngModel)]="user.customerPhone"></ion-input>\n                    <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-5.png" alt=""></ion-label>\n                  </ion-item>\n                </div>\n                <div class="static_col">\n                  <ion-item>\n                    <ion-input type="email" name="customerEmail" disabled  placeholder="Email" [(ngModel)]="user.customerEmail"></ion-input>\n                    <ion-label class="mail-icon-wrap"><img src="assets/imgs/icon-6.png" alt=""></ion-label>\n                  </ion-item>\n                </div>\n                <div class="static_col" style="display: none;">\n                  <ion-item><ion-input name="customerPosition"  placeholder="Position" [(ngModel)]="user.customerId"></ion-input></ion-item>\n                </div>\n              </ion-list>\n              \n            <button ion-button  class="log-in-bt" type="submit" (click)="update_profile()" >Update</button>\n          </div>\n        </ion-col>  \n      </ion-row>\n    </ion-grid>\n\n  </div>\n  <ion-fab right bottom class="home-menu"> \n    <button ion-fab color="danger" (click)="got_to_home()"><ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ng2_image_compress__["ImageCompressService"], __WEBPACK_IMPORTED_MODULE_4__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_3__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_account_my_account__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__paymentdetails_paymentdetails__ = __webpack_require__(174);
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
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


var PaymentPage = /** @class */ (function () {
    function PaymentPage(helperservice, globalservice, navCtrl, navParams) {
        this.helperservice = helperservice;
        this.globalservice = globalservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.free_subscription = {
            'activationDate': '',
            'businessCardScanVal': '',
            'cardScanCredit': '',
            'cardScanCreditBalance': '',
            'currencySymbol': '',
            'description': '',
            'duration': '',
            'durationLevel': '',
            'durationType': '',
            'durationValue': '',
            'expiredDate': '',
            'monthlyCharge': '',
            'periodWithCharge': '',
            'planCahrge': '',
            'requestsVal': '',
            'searchCredit': '',
            'searchCreditBalance': '',
            'status': '',
            'subscriptionId': '',
            'subscriptionName': '',
            'subscriptionType': '',
            'tilkeeCredit': '',
            'tilkeeCreditBalance': '',
            'total': '',
            'trackedDocumentsVal': ''
        };
        this.yearly_subscription = {
            'activationDate': '',
            'businessCardScanVal': '',
            'cardScanCredit': '',
            'cardScanCreditBalance': '',
            'currencySymbol': '',
            'description': '',
            'duration': '',
            'durationLevel': '',
            'durationType': '',
            'durationValue': '',
            'expiredDate': '',
            'monthlyCharge': '',
            'periodWithCharge': '',
            'planCahrge': '',
            'requestsVal': '',
            'searchCredit': '',
            'searchCreditBalance': '',
            'status': '',
            'subscriptionId': '',
            'subscriptionName': '',
            'subscriptionType': '',
            'tilkeeCredit': '',
            'tilkeeCreditBalance': '',
            'total': '',
            'trackedDocumentsVal': ''
        };
        this.buy_subscription = false;
        this.buy_subscription_button_text = "";
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PaymentPage');
        var loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();
        var subscriptondata = {
            'os': 'Web',
            'osVersion': localStorage.getItem('osVersion'),
            'appVersion': '1.0',
            'locale': 'eng',
            'customerId': localStorage.getItem('customerId'),
            'sessionId': localStorage.getItem('customerSessionId')
        };
        //sss console.log(subscriptondata);
        this.globalservice.getsubscriptionslanlist(subscriptondata).subscribe(function (resp) {
            // console.log(resp);
            loadingPop.dismiss();
            if (resp.responseStatus.STATUS == 'SUCCESS' && resp.responseStatus.STATUSCODE == '200') {
                _this.free_subscription = {
                    'activationDate': resp.responseData[1].activationDate,
                    'businessCardScanVal': resp.responseData[1].businessCardScanVal,
                    'cardScanCredit': resp.responseData[1].cardScanCredit,
                    'cardScanCreditBalance': resp.responseData[1].cardScanCreditBalance,
                    'currencySymbol': resp.responseData[1].currencySymbol,
                    'description': resp.responseData[1].description,
                    'duration': resp.responseData[1].duration,
                    'durationLevel': resp.responseData[1].durationLevel,
                    'durationType': resp.responseData[1].durationType,
                    'durationValue': resp.responseData[1].durationValue,
                    'expiredDate': resp.responseData[1].expiredDate,
                    'monthlyCharge': resp.responseData[1].monthlyCharge,
                    'periodWithCharge': resp.responseData[1].periodWithCharge,
                    'planCahrge': resp.responseData[1].planCahrge,
                    'requestsVal': resp.responseData[1].requestsVal,
                    'searchCredit': resp.responseData[1].searchCredit,
                    'searchCreditBalance': resp.responseData[1].searchCreditBalance,
                    'status': resp.responseData[1].status,
                    'subscriptionId': resp.responseData[1].subscriptionId,
                    'subscriptionName': resp.responseData[1].subscriptionName,
                    'subscriptionType': resp.responseData[1].subscriptionType,
                    'tilkeeCredit': resp.responseData[1].tilkeeCredit,
                    'tilkeeCreditBalance': resp.responseData[1].tilkeeCreditBalance,
                    'total': resp.responseData[1].total,
                    'trackedDocumentsVal': resp.responseData[1].trackedDocumentsVal
                };
                _this.yearly_subscription = {
                    'activationDate': resp.responseData[0].activationDate,
                    'businessCardScanVal': resp.responseData[0].businessCardScanVal,
                    'cardScanCredit': resp.responseData[0].cardScanCredit,
                    'cardScanCreditBalance': resp.responseData[0].cardScanCreditBalance,
                    'currencySymbol': resp.responseData[0].currencySymbol,
                    'description': resp.responseData[0].description,
                    'duration': resp.responseData[0].duration,
                    'durationLevel': resp.responseData[0].durationLevel,
                    'durationType': resp.responseData[0].durationType,
                    'durationValue': resp.responseData[0].durationValue,
                    'expiredDate': resp.responseData[0].expiredDate,
                    'monthlyCharge': resp.responseData[0].monthlyCharge,
                    'periodWithCharge': _this.toHTML(resp.responseData[0].periodWithCharge),
                    'planCahrge': _this.toHTML(resp.responseData[0].planCahrge),
                    'requestsVal': resp.responseData[0].requestsVal,
                    'searchCredit': resp.responseData[0].searchCredit,
                    'searchCreditBalance': resp.responseData[0].searchCreditBalance,
                    'status': resp.responseData[0].status,
                    'subscriptionId': resp.responseData[0].subscriptionId,
                    'subscriptionName': resp.responseData[0].subscriptionName,
                    'subscriptionType': resp.responseData[0].subscriptionType,
                    'tilkeeCredit': resp.responseData[0].tilkeeCredit,
                    'tilkeeCreditBalance': resp.responseData[0].tilkeeCreditBalance,
                    'total': resp.responseData[0].total,
                    'trackedDocumentsVal': resp.responseData[0].trackedDocumentsVal
                };
                console.log(_this.free_subscription);
                console.log("==============================");
                console.log(_this.yearly_subscription);
                // console.log(this.yearly_subscription.status);
                if (_this.yearly_subscription.status == 'Open') {
                    // console.log("satisfy");
                    _this.buy_subscription = true;
                    console.log(_this.buy_subscription);
                    _this.buy_subscription_button_text = "Buy Subscription";
                }
                else {
                    _this.buy_subscription_button_text = _this.yearly_subscription.status;
                    console.log("not satisfy");
                }
                console.log(_this.toHTML(resp.responseData[0].planCahrge));
            }
        }, function (err) { });
    };
    //import { MyAccountPage } from '../my-account/my-account';
    PaymentPage.prototype.got_to_home = function () {
        var index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__my_account_my_account__["a" /* MyAccountPage */]);
    };
    PaymentPage.prototype.gotothankyou = function (subscriptionid) {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__paymentdetails_paymentdetails__["a" /* PaymentdetailsPage */]);
        var subscriptionplan_select = {
            'os': 'Web',
            'osVersion': localStorage.getItem('osVersion'),
            'appVersion': '1.0',
            'locale': 'eng',
            'customerId': localStorage.getItem('customerId'),
            'sessionId': localStorage.getItem('customerSessionId'),
            'planId': subscriptionid
        };
        var loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();
        this.globalservice.subscriptionplanselect(subscriptionplan_select).subscribe(function (resp) {
            console.log(resp);
            loadingPop.dismiss();
            if (resp.responseStatus.STATUS == 'SUCCESS' && resp.responseStatus.STATUSCODE == '200') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__paymentdetails_paymentdetails__["a" /* PaymentdetailsPage */]);
            }
        }, function (err) {
            loadingPop.dismiss();
            _this.helperservice.sendalertmessage('bottom', err);
        });
    };
    // this function used to convert html speacil chareter to orginal element
    PaymentPage.prototype.toHTML = function (input) {
        return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Payment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <div class="payment-wrap">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <div class="payment-box">\n              <div class="top-bar">\n                <h2>{{free_subscription.subscriptionName}}</h2>\n                <h3>{{free_subscription.subscriptionType}}</h3>\n                <h5>{{free_subscription.periodWithCharge}}</h5>\n                <button  class="payment-bt-select">{{free_subscription.status}}</button>\n              </div>\n              <div class="features-list">\n                <ul>\n                  <li> <ion-icon ios="ios-calendar-outline" md="ios-calendar-outline"></ion-icon><b> {{free_subscription.durationLevel}}:</b> <span> \n                    {{free_subscription.durationValue}}  </span></li>\n                  <!-- <li><ion-icon ios="ios-person-outline" md="md-person"></ion-icon> <b>User:</b> <span>2 to 7</span></li> -->\n                  <li><span class="icon_img"><img src="assets/imgs/business-card-icon.png"></span>  <b> Business card scanned :</b> <span> {{free_subscription.businessCardScanVal}}\n                   </span></li>\n                  <li> <ion-icon ios="ios-eye-outline" md="ios-eye-outline"></ion-icon> <b> Tracked documents :</b> <span>{{free_subscription.trackedDocumentsVal}}\n                    </span> </li>\n                  <li><ion-icon ios="ios-people-outline" md="ios-people-outline"></ion-icon> <b> Requests :</b> <span> {{free_subscription.requestsVal}}\n                     </span></li>\n                  <li><ion-icon ios="ios-clipboard" md="md-clipboard"></ion-icon> <b> Details :</b> <span style="width: 57%"> {{free_subscription.description}} </span></li>\n                  <div *ngIf="free_subscription.status ==\'Running\'">\n                    <li><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon><b>Activation Date :</b> <span>  {{free_subscription.activationDate}}</span></li>\n                    <li><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon><b>Expiry date:</b> <span> {{free_subscription.expiredDate}}</span>  </li>\n                  </div>\n                </ul>\n              </div>\n            </div>\n          </ion-col>\n          <ion-col col-6>\n              <div class="payment-box">\n                <div class="top-bar">\n                  \n                  <h2>{{yearly_subscription.subscriptionName}}</h2>\n                 \n                  <h3>{{yearly_subscription.planCahrge}}</h3>\n                  <h5>{{yearly_subscription.periodWithCharge}}</h5>\n                  <button  [disabled]="!buy_subscription" (click)="gotothankyou(yearly_subscription.subscriptionId);" class="payment-bt-select">{{buy_subscription_button_text}} </button>\n                </div>\n                <div class="features-list">\n                  <ul>\n                    <li> <ion-icon ios="ios-calendar-outline" md="ios-calendar-outline"></ion-icon><b> {{yearly_subscription.durationLevel}}:</b> <span> \n                      {{yearly_subscription.durationValue}}  </span></li>\n\n                      <!-- <li><ion-icon ios="ios-person-outline" md="md-person"></ion-icon> <b>User:</b> <span>2 to 6</span></li> -->\n                      <!-- <ion-icon ios="ios-card" md="ios-card"></ion-icon> -->\n                    <li><span class="icon_img"><img src="assets/imgs/business-card-icon.png"></span> <b> Business card scanned :</b> <span>{{yearly_subscription.businessCardScanVal}}\n                      </span> </li>\n\n\n                    <li> <ion-icon ios="ios-eye-outline" md="ios-eye-outline"></ion-icon> \n                      <b> Tracked documents :</b> <span>{{yearly_subscription.trackedDocumentsVal}} </span></li>\n\n                    <li>  <ion-icon ios="ios-people-outline" md="ios-people-outline"></ion-icon>\n                      <b> Requests :</b> <span> {{yearly_subscription.requestsVal}}\n                      </span> </li>\n                      <li><ion-icon ios="ios-clipboard" md="md-clipboard"></ion-icon> <b> Details :</b> <span style="width: 57%"> \n                        {{yearly_subscription.description}} </span></li>\n                        <div *ngIf="yearly_subscription.status ==\'Running\'">\n                          <li><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon><b>Activation Date :</b> <span>  {{yearly_subscription.activationDate}}</span></li>\n                          <li><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon><b>Expiry date:</b> <span> {{yearly_subscription.expiredDate}}</span>  </li>\n                        </div>\n                       \n                  </ul>\n                </div>\n               \n              </div>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n  <ion-fab right bottom class="home-menu"> \n      <button ion-fab color="danger" (click)="got_to_home()"><ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BussinesscardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bussinesscard_details_bussinesscard_details__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bussinesscard_add_bussinesscard_add__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bussinesscard_edit_bussinesscard_edit__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_account_my_account__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_image_compress__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_image_compress__);
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
 * Generated class for the BussinesscardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BussinesscardPage = /** @class */ (function () {
    function BussinesscardPage(helperservice, globalservice, navCtrl, navParams) {
        this.helperservice = helperservice;
        this.globalservice = globalservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.base64textString = "";
        this.image_base64_raw = "";
        this.search = "";
        this.show = false;
    }
    // GENERATE LIST OF BUISNESS CARD
    BussinesscardPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var objAgent = navigator.userAgent;
        var objbrowserName = navigator.appName;
        var objfullVersion = '' + parseFloat(navigator.appVersion);
        var objBrMajorVersion = parseInt(navigator.appVersion, 10);
        var objOffsetName, objOffsetVersion, ix;
        // In Chrome 
        if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
            objbrowserName = "Chrome";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
        }
        else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
            objbrowserName = "Microsoft Internet Explorer";
            objfullVersion = objAgent.substring(objOffsetVersion + 5);
        }
        else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
            objbrowserName = "Firefox";
        }
        else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
            objbrowserName = "Safari";
            objfullVersion = objAgent.substring(objOffsetVersion + 7);
            if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
                objfullVersion = objAgent.substring(objOffsetVersion + 8);
        }
        else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) <
            (objOffsetVersion = objAgent.lastIndexOf('/'))) {
            objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
            objfullVersion = objAgent.substring(objOffsetVersion + 1);
            if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
                objbrowserName = navigator.appName;
            }
        }
        // trimming the fullVersion string at semicolon/space if present
        if ((ix = objfullVersion.indexOf(";")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        if ((ix = objfullVersion.indexOf(" ")) != -1)
            objfullVersion = objfullVersion.substring(0, ix);
        objBrMajorVersion = parseInt('' + objfullVersion, 10);
        if (isNaN(objBrMajorVersion)) {
            objfullVersion = '' + parseFloat(navigator.appVersion);
            objBrMajorVersion = parseInt(navigator.appVersion, 10);
        }
        this.osversion = objbrowserName + "_" + objfullVersion;
        var getallcards = {
            'sessionId': localStorage.getItem('customerSessionId'),
            'osVersion': this.osversion,
            'appVersion': '1.0',
            'customerId': localStorage.getItem("customerId"),
            'os': 'Web',
            'startingRecordNo': '0',
            'locale': 'en'
        };
        //  console.log(getallcards);
        this.loadingPop = this.helperservice.createLoadingBar();
        this.loadingPop.present();
        this.globalservice.list_bisnes_card(getallcards).subscribe(function (resp) {
            _this.loadingPop.dismiss();
            // console.log(resp);
            // // this.navCtrl.push(HomePage);
            if (resp.responseStatus.STATUS == "SUCCESS") {
                _this.card_list = resp.responseData;
                _this.store_card_list = _this.card_list;
            }
            else if (resp.responseStatus.STATUS == "FAILED" && resp.responseStatus.STATUSCODE == "210") {
                _this.helperservice.backtohome();
            }
            else {
                _this.card_list = "";
            }
        }, function (err) {
            _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
        });
        // console.log('ionViewDidLoad BussinesscardPage');
    };
    // GO TO BUISNESS-CARD DETAILS PAGE
    BussinesscardPage.prototype.gobussinesscarddetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bussinesscard_details_bussinesscard_details__["a" /* BussinesscardDetailsPage */]);
    };
    // ADD NEW BUISNESS-CARD
    BussinesscardPage.prototype.scan_bcard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bussinesscard_add_bussinesscard_add__["a" /* BussinesscardAddPage */]);
    };
    // VIEW DETAILS OF BUISNESS-CARD
    BussinesscardPage.prototype.view_details = function (cardid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bussinesscard_details_bussinesscard_details__["a" /* BussinesscardDetailsPage */], { cardid: cardid });
    };
    // ITS USED TO CONVERT FILE TO BASE 64 ENCODED FORMAT
    BussinesscardPage.prototype.onFileChanged = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        //console.log(this.selectedFile )
        var image_name = this.selectedFile.name;
        // console.log(image_name);
        var res_img = image_name.split(".");
        this.image_ext = res_img[1];
        // console.log(this.image_ext);
        function randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i)
                result += chars[Math.floor(Math.random() * chars.length)];
            return result;
        }
        var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        var fileList;
        var images = [];
        __WEBPACK_IMPORTED_MODULE_8_ng2_image_compress__["ImageCompressService"].filesToCompressedImageSource(event.target.files).then(function (observableImages) {
            observableImages.subscribe(function (image) {
                images.push(image);
            }, function (error) {
                console.log("Error while converting");
            }, function () {
                _this.processedImages = images;
                //console.log("modifiedimage :");  
                //console.log( this.processedImages)  ;
                var str = _this.processedImages[0].compressedImage.imageDataUrl;
                var ix = str.indexOf(",");
                var objfullVersion = str.substring(ix + 1);
                //console.log(objfullVersion)  ;
                _this.image_name = objfullVersion;
                _this.base64textString = _this.processedImages[0].compressedImage.imageDataUrl;
                //console.log(this.base64textString)  ;
                _this.showTitle = true;
                var camcarddata = {
                    'locale': 'eng',
                    'deviceId': rString,
                    'os': 'Web',
                    'osVersion': localStorage.getItem('osVersion'),
                    'appVersion': '1.0',
                    'customerId': localStorage.getItem('customerId'),
                    'sessionId': localStorage.getItem('customerSessionId'),
                    'cardPic': _this.image_name,
                    'cardPicExt': _this.image_ext
                };
                console.log(camcarddata);
                _this.loadingPop = _this.helperservice.createLoadingBar();
                _this.loadingPop.present();
                _this.globalservice.callcamcardapi(camcarddata).subscribe(function (resp) {
                    console.log(resp);
                    _this.loadingPop.dismiss();
                    if (resp.responseStatus.STATUS == 'SUCCESS' && resp.responseStatus.STATUSCODE == '200') {
                        //this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bussinesscard_edit_bussinesscard_edit__["a" /* BussinesscardEditPage */], { data: JSON.parse(resp.responseData.jsonResponse), image_base64_raw: _this.image_name, image: _this.base64textString });
                    }
                    else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '601') {
                        _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    }
                    else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '500') {
                        _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    }
                    else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '210') {
                        _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                        _this.helperservice.backtohome();
                    }
                    else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '300') {
                        _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    }
                    else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '602') {
                        _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    }
                    else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '603') {
                        _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    }
                    else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '605') {
                        _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    }
                }, function (err) {
                    _this.loadingPop.dismiss();
                    _this.helperservice.sendalertmessage('bottom', err);
                });
            });
        });
    };
    // GO TO DASHBOARD PAGE
    BussinesscardPage.prototype.got_to_home = function () {
        var index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__my_account_my_account__["a" /* MyAccountPage */]);
    };
    // Get search data
    BussinesscardPage.prototype.getsearchdata = function () {
        var _this = this;
        if (this.search == '') {
            this.helperservice.sendalertmessage('bottom', 'Please enter your search text');
        }
        else {
            console.log(this.search);
            var searchjson = {
                'sessionId': localStorage.getItem('customerSessionId'),
                'osVersion': this.osversion,
                'appVersion': '1.0',
                'customerId': localStorage.getItem("customerId"),
                'os': 'Web',
                'startingRecordNo': '0',
                'locale': 'en',
                'searchKey': this.search
            };
            this.loadingPop = this.helperservice.createLoadingBar();
            this.loadingPop.present();
            this.globalservice.search_bisnes_card(searchjson).subscribe(function (resp) {
                console.log(resp),
                    _this.loadingPop.dismiss();
                if (resp.responseStatus.STATUS == "SUCCESS" && resp.responseStatus.STATUSCODE == '200') {
                    _this.card_list = resp.responseData;
                    _this.show = true;
                    //  const resetbutton = document.getElementsByClassName("reset-class") as HTMLCollectionOf<HTMLElement>;
                    //  resetbutton.style.display = "block";
                    // <HTMLElement>document.querySelector('#yourDomElmentID')).style.display = 'none';
                }
                else if (resp.responseStatus.STATUS == "FAILED" && resp.responseStatus.STATUSCODE == "213") {
                    _this.card_list = "";
                    _this.show = true;
                }
                else {
                    _this.card_list = "";
                    _this.show = true;
                }
            }, function (err) { _this.helperservice.sendalertmessage('bottom', err); });
        }
    };
    // reset seach data
    BussinesscardPage.prototype.reset_search = function () {
        this.search = '';
        this.card_list = this.store_card_list;
        this.show = false;
    };
    BussinesscardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bussinesscard',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/bussinesscard/bussinesscard.html"*/'<!--\n  Generated template for the BussinesscardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Business card</ion-title>\n    <ion-buttons end class="add_btn_area"> <button class="add_btn" (click)="scan_bcard()">\n        <ion-icon name="add-circle" ios="ios-add-circle-outline" md="ios-add-circle-outline"></ion-icon>\n      </button> </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  padding>\n\n  <div class="container">\n    <ion-grid>\n      <ion-row>\n\n        <ion-col col-12 class="search_block">\n          <div class="search-wrap">\n            <input autocomplete="off" name="search" [(ngModel)]="search" type="text" placeholder="Search">\n            <button class="search_icon" (click)="getsearchdata()">\n              <ion-icon name="search"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n      \n\n\n      <div class="card_found" *ngIf="card_list !=\'\'" >\n                      \n          <ion-row class="bussinesscard-list-wrap" >\n              <ion-col col-4 class="bussinesscard-list-wrap-box"  *ngFor ="let data of card_list">\n                <!-- <span class="delete"><span></span></span> -->\n                <ul>\n                  <li>\n                    <!-- <h2> <ion-icon ios="ios-person-outline" md="ios-person-outline"></ion-icon> Name :</h2> -->\n                    <h3>{{data.firstName}} {{data.lastName}} </h3>\n                  </li>\n                  <li>\n                    <h2><ion-icon ios="ios-briefcase" md="ios-briefcase-outline"></ion-icon>Company: </h2>\n                    <h3>{{data.company}}</h3>\n                  </li>\n                  <li>\n                    <h2>  <ion-icon ios="ios-mail" md="ios-mail-outline"></ion-icon>Email: </h2>\n                    <h3>{{data.email}}</h3>\n                  </li>\n                  <li>\n                    <h2>  <ion-icon ios="ios-call-outline" md="ios-call-outline"></ion-icon> Telephone: </h2>\n                    <div *ngIf="data.phone!=\'null\'">\n                        <h3>{{data.phone}}</h3>\n                    </div>\n                    <div *ngIf="data.phone==null">\n                        <h3> </h3>\n                    </div>\n                   \n                  </li>\n                  <li>\n                    <button (click)="view_details(data.cardId)" class="view-details">View Details</button>\n                  </li>\n      \n                </ul>\n              </ion-col>\n              \n              </ion-row>\n        </div>\n        <div class="card_not_found"  *ngIf="card_list ==\'\'" >\n      \n          <ion-row class="bussinesscard-list-wrap" > \n            <ion-col col-4 class="bussinesscard-list-wrap-box no-card-found" style="border-color: white;">\n                \n              <p>No business card found</p>\n              \n             \n            </ion-col>\n          </ion-row>\n          </div>\n        <div class="reset-class"  *ngIf="show">\n          <button ion-button class="log-in-bt" (click)="reset_search()" type="submit">Reset</button>\n        </div>\n       \n    </ion-grid>\n  </div>\n  <ion-fab  right bottom class="home-menu" absolute-drag id="mydiv"> \n    <button (click)="got_to_home()" ion-fab color="danger"><ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon></button>\n  </ion-fab>\n  \n</ion-content>\n\n<ion-footer class="footer" text-center>\n  <div class="footer_icon"><button>\n      <input style="display: none"   capture="environment"  accept="image/*"  type="file" (change)="onFileChanged($event)" #fileInput>\n      <ion-icon (click)="fileInput.click()" ios="ios-camera" md="md-camera"></ion-icon>\n    </button></div>\n</ion-footer>\n\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/bussinesscard/bussinesscard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_5__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], BussinesscardPage);
    return BussinesscardPage;
}());

//# sourceMappingURL=bussinesscard.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(516);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_payment_payment__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forgot_password_forgot_password__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bussinesscard_bussinesscard__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_bussinesscard_details_bussinesscard_details__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_bussinesscard_edit_bussinesscard_edit__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_my_account_my_account__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_change_password_change_password__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_project_stat_project_stat__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tilk_stat_tilk_stat__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_trackfile_trackfile__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_bussinesscard_add_bussinesscard_add__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_track_track__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_addtrack_addtrack__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_trackfilepreview_trackfilepreview__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_paymentdetails_paymentdetails__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_helper_helper_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_api_apitwo_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_common_http__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_image_compress__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng2_image_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_img_cropper__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ngx_pagination__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_dragula__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ngx_tooltip__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_ngx_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ionic_img_viewer__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ng4_social_login__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ng4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_ng4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// imported pages 



















// imported custom services  and providers



// imported  plugins and internal modules


//import { UniqueDeviceID } from '@ionic-native/unique-device-id';
//import { Device } from '@ionic-native/device';



//import { Ng2FileSizeModule } from 'ng2-file-size';
//import { AbsoluteDrag } from '../directives/absolute-drag/absolute-drag';




//import { Ng2GoogleChartsModule } from 'ng2-google-charts';
// Import the library 

// import {
//   SocialLoginModule,
//   AuthServiceConfig,
//   LinkedinLoginProvider
// } from "angular5-social-auth";
// // Configs 
// export function getAuthServiceConfigs() {
// let config = new AuthServiceConfig(
//     [
//        {
//         id: LinkedinLoginProvider.PROVIDER_ID,
//         provider: new LinkedinLoginProvider('813i281nxmkqi1')
//       }
//     ]
// );
// return config;
// }
// import {
//   SocialLoginModule,
//   AuthServiceConfig,
//   LinkedinLoginProvider
// } from "angular5-social-auth";

// common pipe 
var CONFIG = new __WEBPACK_IMPORTED_MODULE_37_ng4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_37_ng4_social_login__["LinkedinLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_37_ng4_social_login__["LinkedinLoginProvider"]('813i281nxmkqi1')
    }
], false);
function provideConfig() {
    return CONFIG;
}
var dateformatterPipe = /** @class */ (function () {
    function dateformatterPipe() {
    }
    dateformatterPipe.prototype.transform = function (value) {
        return __WEBPACK_IMPORTED_MODULE_34_moment__(value).startOf('hour').fromNow();
    };
    dateformatterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: "dateformatter" })
    ], dateformatterPipe);
    return dateformatterPipe;
}());
var MilisecondtotimePipe = /** @class */ (function () {
    function MilisecondtotimePipe() {
    }
    MilisecondtotimePipe.prototype.transform = function (value) {
        var abc = "";
        var sww = "";
        var seconds = (value / 1000);
        var xyz = (seconds / 60).toString();
        var minutes = parseInt(xyz, 10);
        var mnc = (seconds % 60).toFixed(2);
        seconds = +mnc;
        var hours = parseInt((minutes / 60).toString(), 10);
        minutes = minutes % 60;
        if (hours > 0) {
            abc = hours + 'hr';
        }
        else {
            abc = '';
        }
        if (minutes > 0) {
            sww = minutes + 'm';
        }
        else {
            sww = '';
        }
        return abc + sww + seconds + 's';
    };
    MilisecondtotimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: "milisecondtotime" })
    ], MilisecondtotimePipe);
    return MilisecondtotimePipe;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bussinesscard_bussinesscard__["a" /* BussinesscardPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bussinesscard_details_bussinesscard_details__["a" /* BussinesscardDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bussinesscard_edit_bussinesscard_edit__["a" /* BussinesscardEditPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_31_ngx_img_cropper__["b" /* ImageCropperComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_bussinesscard_add_bussinesscard_add__["a" /* BussinesscardAddPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_track_track__["a" /* TrackPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_addtrack_addtrack__["a" /* AddtrackPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_trackfilepreview_trackfilepreview__["a" /* TrackfilepreviewPage */],
                // AbsoluteDrag
                MilisecondtotimePipe,
                dateformatterPipe,
                __WEBPACK_IMPORTED_MODULE_16__pages_project_stat_project_stat__["a" /* ProjectStatPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tilk_stat_tilk_stat__["a" /* TilkStatPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_trackfile_trackfile__["a" /* TrackfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_paymentdetails_paymentdetails__["a" /* PaymentdetailsPage */]
            ],
            imports: [
                // Ng2GoogleChartsModule,
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_32_ngx_pagination__["a" /* NgxPaginationModule */],
                // Ng2FileSizeModule,
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/camcard/camcard.module#CamcardPageModule', name: 'camacard-test', segment: 'camcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-project/create-project.module#CreateProjectPageModule', name: 'create_project', segment: 'create-project', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/drafted-file/drafted-file.module#DraftedFilePageModule', name: 'drafted_project', segment: 'drafted-file', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-upload/file-upload.module#FileUploadPageModule', name: 'FileUploadPage', segment: 'file-upload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-projects/list-projects.module#ListProjectsPageModule', name: 'list_projects', segment: 'list-projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-tilkee-start/file-tilkee-start.module#FileTilkeeStartPageModule', name: 'tilkee_api_integration', segment: 'file-tilkee-start', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-tilk/list-tilk.module#ListTilkPageModule', name: 'ListTilkPage', segment: 'list-tilk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentdetails/paymentdetails.module#PaymentdetailsPageModule', name: 'PaymentdetailsPage', segment: 'paymentdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preview-tilk/preview-tilk.module#PreviewTilkPageModule', name: 'TilkPreviewPage', segment: 'preview-tilk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/readed-file/readed-file.module#ReadedFilePageModule', name: 'read_project', segment: 'readed-file', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tilk-create/tilk-create.module#TilkCreatePageModule', name: 'TilkCreatePage', segment: 'tilk-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tilk-stat/tilk-stat.module#TilkStatPageModule', name: 'TilkStatPage', segment: 'tilk-stat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/track/track.module#TrackPageModule', name: 'TrackPage', segment: 'track', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bussinesscard-add/bussinesscard-add.module#BussinesscardAddPageModule', name: 'add_card', segment: 'bussinesscard-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'search_contact', segment: 'contact', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_33_ng2_dragula__["a" /* DragulaModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_35_ngx_tooltip__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_37_ng4_social_login__["SocialLoginModule"],
                __WEBPACK_IMPORTED_MODULE_36_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_37_ng4_social_login__["SocialLoginModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bussinesscard_bussinesscard__["a" /* BussinesscardPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bussinesscard_details_bussinesscard_details__["a" /* BussinesscardDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bussinesscard_edit_bussinesscard_edit__["a" /* BussinesscardEditPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_bussinesscard_add_bussinesscard_add__["a" /* BussinesscardAddPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_track_track__["a" /* TrackPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_addtrack_addtrack__["a" /* AddtrackPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_trackfilepreview_trackfilepreview__["a" /* TrackfilepreviewPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_project_stat_project_stat__["a" /* ProjectStatPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tilk_stat_tilk_stat__["a" /* TilkStatPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_trackfile_trackfile__["a" /* TrackfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_paymentdetails_paymentdetails__["a" /* PaymentdetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__services_helper_helper_service__["a" /* HelperService */],
                __WEBPACK_IMPORTED_MODULE_26__providers_global_value_global_value__["a" /* GlobalValueProvider */],
                __WEBPACK_IMPORTED_MODULE_27__services_api_apitwo_service__["a" /* ApitwoService */],
                __WEBPACK_IMPORTED_MODULE_30_ng2_image_compress__["ImageCompressService"],
                __WEBPACK_IMPORTED_MODULE_30_ng2_image_compress__["ResizeOptions"],
                //UniqueDeviceID,
                // Device,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicErrorHandler */] },
                // Inject apiKey and, optionally, authorize to integrate with LinkedIN official API
                // {provide: AuthServiceConfig,
                //   useFactory: getAuthServiceConfigs}
                {
                    provide: __WEBPACK_IMPORTED_MODULE_37_ng4_social_login__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "API_BASE_URL", {
        //public static get API_BASE_URL(): string { return 'http://192.168.1.1/customerapp';}
        get: function () { return 'https://www.ley-valy.io/public/api/webServices'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "TILKEE_BASE_URL", {
        get: function () { return 'https://api.tilkee.com'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "CAMCARD_BASE_URL", {
        get: function () { return 'https://bcr1.intsig.net/BCRService'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "HUNTER_BASE_URL", {
        get: function () { return 'https://api.hunter.io/v2'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "LUSHA_BASE_URL", {
        get: function () { return 'https://api.lusha.co'; },
        enumerable: true,
        configurable: true
    });
    return Constants;
}());

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 328,
	"./af.js": 328,
	"./ar": 329,
	"./ar-dz": 330,
	"./ar-dz.js": 330,
	"./ar-kw": 331,
	"./ar-kw.js": 331,
	"./ar-ly": 332,
	"./ar-ly.js": 332,
	"./ar-ma": 333,
	"./ar-ma.js": 333,
	"./ar-sa": 334,
	"./ar-sa.js": 334,
	"./ar-tn": 335,
	"./ar-tn.js": 335,
	"./ar.js": 329,
	"./az": 336,
	"./az.js": 336,
	"./be": 337,
	"./be.js": 337,
	"./bg": 338,
	"./bg.js": 338,
	"./bm": 339,
	"./bm.js": 339,
	"./bn": 340,
	"./bn.js": 340,
	"./bo": 341,
	"./bo.js": 341,
	"./br": 342,
	"./br.js": 342,
	"./bs": 343,
	"./bs.js": 343,
	"./ca": 344,
	"./ca.js": 344,
	"./cs": 345,
	"./cs.js": 345,
	"./cv": 346,
	"./cv.js": 346,
	"./cy": 347,
	"./cy.js": 347,
	"./da": 348,
	"./da.js": 348,
	"./de": 349,
	"./de-at": 350,
	"./de-at.js": 350,
	"./de-ch": 351,
	"./de-ch.js": 351,
	"./de.js": 349,
	"./dv": 352,
	"./dv.js": 352,
	"./el": 353,
	"./el.js": 353,
	"./en-au": 354,
	"./en-au.js": 354,
	"./en-ca": 355,
	"./en-ca.js": 355,
	"./en-gb": 356,
	"./en-gb.js": 356,
	"./en-ie": 357,
	"./en-ie.js": 357,
	"./en-il": 358,
	"./en-il.js": 358,
	"./en-nz": 359,
	"./en-nz.js": 359,
	"./eo": 360,
	"./eo.js": 360,
	"./es": 361,
	"./es-do": 362,
	"./es-do.js": 362,
	"./es-us": 363,
	"./es-us.js": 363,
	"./es.js": 361,
	"./et": 364,
	"./et.js": 364,
	"./eu": 365,
	"./eu.js": 365,
	"./fa": 366,
	"./fa.js": 366,
	"./fi": 367,
	"./fi.js": 367,
	"./fo": 368,
	"./fo.js": 368,
	"./fr": 369,
	"./fr-ca": 370,
	"./fr-ca.js": 370,
	"./fr-ch": 371,
	"./fr-ch.js": 371,
	"./fr.js": 369,
	"./fy": 372,
	"./fy.js": 372,
	"./gd": 373,
	"./gd.js": 373,
	"./gl": 374,
	"./gl.js": 374,
	"./gom-latn": 375,
	"./gom-latn.js": 375,
	"./gu": 376,
	"./gu.js": 376,
	"./he": 377,
	"./he.js": 377,
	"./hi": 378,
	"./hi.js": 378,
	"./hr": 379,
	"./hr.js": 379,
	"./hu": 380,
	"./hu.js": 380,
	"./hy-am": 381,
	"./hy-am.js": 381,
	"./id": 382,
	"./id.js": 382,
	"./is": 383,
	"./is.js": 383,
	"./it": 384,
	"./it.js": 384,
	"./ja": 385,
	"./ja.js": 385,
	"./jv": 386,
	"./jv.js": 386,
	"./ka": 387,
	"./ka.js": 387,
	"./kk": 388,
	"./kk.js": 388,
	"./km": 389,
	"./km.js": 389,
	"./kn": 390,
	"./kn.js": 390,
	"./ko": 391,
	"./ko.js": 391,
	"./ky": 392,
	"./ky.js": 392,
	"./lb": 393,
	"./lb.js": 393,
	"./lo": 394,
	"./lo.js": 394,
	"./lt": 395,
	"./lt.js": 395,
	"./lv": 396,
	"./lv.js": 396,
	"./me": 397,
	"./me.js": 397,
	"./mi": 398,
	"./mi.js": 398,
	"./mk": 399,
	"./mk.js": 399,
	"./ml": 400,
	"./ml.js": 400,
	"./mn": 401,
	"./mn.js": 401,
	"./mr": 402,
	"./mr.js": 402,
	"./ms": 403,
	"./ms-my": 404,
	"./ms-my.js": 404,
	"./ms.js": 403,
	"./mt": 405,
	"./mt.js": 405,
	"./my": 406,
	"./my.js": 406,
	"./nb": 407,
	"./nb.js": 407,
	"./ne": 408,
	"./ne.js": 408,
	"./nl": 409,
	"./nl-be": 410,
	"./nl-be.js": 410,
	"./nl.js": 409,
	"./nn": 411,
	"./nn.js": 411,
	"./pa-in": 412,
	"./pa-in.js": 412,
	"./pl": 413,
	"./pl.js": 413,
	"./pt": 414,
	"./pt-br": 415,
	"./pt-br.js": 415,
	"./pt.js": 414,
	"./ro": 416,
	"./ro.js": 416,
	"./ru": 417,
	"./ru.js": 417,
	"./sd": 418,
	"./sd.js": 418,
	"./se": 419,
	"./se.js": 419,
	"./si": 420,
	"./si.js": 420,
	"./sk": 421,
	"./sk.js": 421,
	"./sl": 422,
	"./sl.js": 422,
	"./sq": 423,
	"./sq.js": 423,
	"./sr": 424,
	"./sr-cyrl": 425,
	"./sr-cyrl.js": 425,
	"./sr.js": 424,
	"./ss": 426,
	"./ss.js": 426,
	"./sv": 427,
	"./sv.js": 427,
	"./sw": 428,
	"./sw.js": 428,
	"./ta": 429,
	"./ta.js": 429,
	"./te": 430,
	"./te.js": 430,
	"./tet": 431,
	"./tet.js": 431,
	"./tg": 432,
	"./tg.js": 432,
	"./th": 433,
	"./th.js": 433,
	"./tl-ph": 434,
	"./tl-ph.js": 434,
	"./tlh": 435,
	"./tlh.js": 435,
	"./tr": 436,
	"./tr.js": 436,
	"./tzl": 437,
	"./tzl.js": 437,
	"./tzm": 438,
	"./tzm-latn": 439,
	"./tzm-latn.js": 439,
	"./tzm.js": 438,
	"./ug-cn": 440,
	"./ug-cn.js": 440,
	"./uk": 441,
	"./uk.js": 441,
	"./ur": 442,
	"./ur.js": 442,
	"./uz": 443,
	"./uz-latn": 444,
	"./uz-latn.js": 444,
	"./uz.js": 443,
	"./vi": 445,
	"./vi.js": 445,
	"./x-pseudo": 446,
	"./x-pseudo.js": 446,
	"./yo": 447,
	"./yo.js": 447,
	"./zh-cn": 448,
	"./zh-cn.js": 448,
	"./zh-hk": 449,
	"./zh-hk.js": 449,
	"./zh-tw": 450,
	"./zh-tw.js": 450
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 818;

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_payment_payment__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_account_my_account__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_change_password_change_password__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_global_value_global_value__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_helper_helper_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(helperservice, globalservice, platform, statusBar, splashScreen) {
        this.helperservice = helperservice;
        this.globalservice = globalservice;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_my_account_my_account__["a" /* MyAccountPage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */] },
            // { title:  'Settings', component: MyAccountPage },
            //{ title:  'Payment', component: PaymentPage },
            { title: 'Payment', component: __WEBPACK_IMPORTED_MODULE_6__pages_payment_payment__["a" /* PaymentPage */] },
            // { title:  'Mail', component: MyAccountPage },
            { title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_8__pages_change_password_change_password__["a" /* ChangePasswordPage */] },
            // {title :'Contact Information' ,component :ContactPage},
            { title: 'Logout', component: null },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
        var _this = this;
        console.log(page);
        if (page.component != null && page.component != undefined && page.component != '') {
            console.log("hello one");
            if (page.component == __WEBPACK_IMPORTED_MODULE_7__pages_my_account_my_account__["a" /* MyAccountPage */]) {
                this.nav.setRoot(page.component);
            }
            else {
                this.nav.push(page.component);
            }
        }
        else {
            console.log('logout heated');
            var logoutjson = {
                'locale': 'eng',
                'os': 'Web',
                'osVersion': localStorage.getItem('osVersion'),
                'appVersion': '1.0',
                'sessionId': localStorage.getItem('customerSessionId'),
                'customerId': localStorage.getItem("customerId")
            };
            console.log(logoutjson);
            this.globalservice.calllogout(logoutjson).subscribe(function (resp) {
                if (resp.responseStatus.STATUS == 'SUCCESS' && resp.responseStatus.STATUSCODE == '200') {
                    console.log(resp);
                    localStorage.setItem("customerId", "");
                    localStorage.setItem("customerEmail", "");
                    localStorage.setItem("customerFirstName", "");
                    localStorage.setItem("customerLastName", "");
                    localStorage.setItem("customerProfilePic", "");
                    localStorage.setItem("customerSessionId", "");
                    localStorage.setItem('customerEnterprise', "");
                    localStorage.setItem('customerPosition', "");
                    localStorage.setItem('customerMobile', "");
                    localStorage.setItem('customerPhone', "");
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
                }
                else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '601') {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
                else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '500') {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
                else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '210') {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                    _this.helperservice.backtohome();
                }
                else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '300') {
                    _this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
                }
            }, function (err) {
                _this.helperservice.sendalertmessage('bottom', err);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/app/app.html"*/'<ion-menu [content]="content"  id=\'myMenu\' >\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list class="nav-wrap">\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_9__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[511]);
//# sourceMappingURL=main.js.map