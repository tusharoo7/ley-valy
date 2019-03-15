webpackJsonp([17],{

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilkCreatePageModule", function() { return TilkCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilk_create__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_tags_input__ = __webpack_require__(888);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TilkCreatePageModule = /** @class */ (function () {
    function TilkCreatePageModule() {
    }
    TilkCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tilk_create__["a" /* TilkCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tilk_create__["a" /* TilkCreatePage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_tags_input__["a" /* IonTagsInputModule */]
            ],
        })
    ], TilkCreatePageModule);
    return TilkCreatePageModule;
}());

//# sourceMappingURL=tilk-create.module.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TilkCreatePage; });
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
 * Generated class for the TilkCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TilkCreatePage = /** @class */ (function () {
    function TilkCreatePage(viewCtrl, globalservice, helperservice, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.globalservice = globalservice;
        this.helperservice = helperservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newdata = [];
        this.projectid = navParams.get('projectid');
    }
    TilkCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TilkCreatePage');
    };
    // create tilk link
    TilkCreatePage.prototype.generatelink = function () {
        var _this = this;
        // console.log(this.toppings);
        var myJSON = JSON.stringify(this.toppings);
        var obj = JSON.parse(myJSON);
        for (var i = 0; i <= obj.length; i++) {
            this.newdata.push({ name: obj[i] });
        }
        this.newdata.pop();
        var xyz = JSON.stringify(this.newdata);
        console.log(obj_one);
        var jsonStr2 = '{"persons":' + xyz + '}';
        //console.log(jsonStr2);
        var obj_one = JSON.parse(jsonStr2);
        //console.log(obj_one);
        var loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();
        this.globalservice.generatelink(obj_one, this.projectid).subscribe(function (response) {
            loadingPop.dismiss();
            _this.toppings = "";
            if (response.length != 0) {
                console.log(response.contents);
                _this.link = response.contents;
            }
            else {
                _this.helperservice.sendalertmessage('bottom', 'Link Not Generated');
                _this.navCtrl.push('list_projects');
            }
            //  if (response[0].id!="")
            //    {
            //     loadingPop.dismiss();
            //     this.helperservice.sendalertmessage('bottom','File added sucessfully with this project ');
            //     this.navCtrl.push('list_projects');
            //    }
        }, function (err) {
            _this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
        });
    };
    TilkCreatePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TilkCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tilk-create',template:/*ion-inline-start:"/home/koushik/workspace/leyvalley/src/pages/tilk-create/tilk-create.html"*/'<!--\n  Generated template for the TilkCreatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Generate Access Link</ion-title>\n    <button  (click)="dismiss()" class="canc-bt">Cancel <ion-icon name="md-close" showWhen="android,windows"></ion-icon></button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="container">\n        <ion-grid>\n        <ion-row>\n            <ion-col col-12>\n                <div class="fileupload-in-form-cont">\n                    <ion-list>\n                        <ion-item>\n                          <ion-label>Choose Name</ion-label>\n                          <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Nah" okText="Okay!">\n                            <ion-option value="bacon@gmail.com" >Bacon Tret</ion-option>\n                            <ion-option value="olives@gmail.com">Black Smith</ion-option>\n                            <ion-option value="xcheese@gmail.com" >Extrand Cheeser</ion-option>\n                            <ion-option value="peppers@gmail.com">Greenich Hence</ion-option>\n                            <ion-option value="mushrooms@gmail.com">Millan Olives</ion-option>\n                            <ion-option value="onions@gmail.com">Osrignht Cought</ion-option>\n                            <ion-option value="pepperoni@gmail.com">Pepperoni Stefree</ion-option>\n                            <ion-option value="pineapple@gmail.com">Pinach Rojer</ion-option>\n                            <ion-option value="sausage@gmail.com">Sydrop Trups</ion-option>\n                            <ion-option value="spinach@gmail.com">Spinach Stept</ion-option>\n                          </ion-select>\n                        </ion-item>\n                        <button ion-button class="fileupload-in-bt" type="button" (click)="generatelink()" >Generate Link</button>\n                      </ion-list>\n\n                      <ion-list>\n                        \n                            <ion-card *ngFor ="let data of link">\n                                <ion-card-header>\n                                    <p>{{data.project_name}}</p>\n                                </ion-card-header>\n                                <ion-card-content>\n                                  <table class="bussiness-table">\n                                    <thead>\n                                      <th>Created For</th>\n                                      <th>Link</th>\n                                    </thead>\n                                    <tbody>\n                                      <tr><td>{{data.name}}</td><td><ion-input type="text" value="{{data.link}}"></ion-input></td></tr>\n                                    </tbody>\n                                  </table>\n                                 \n                                </ion-card-content>\n                              </ion-card>\n                         \n                      </ion-list>\n                  </div>\n                  </ion-col>\n                  </ion-row>\n                  </ion-grid>\n                  </div>\n    <!-- <ion-tags-input [(ngModel)]="tags" (onChange)="onChange($event)"></ion-tags-input> -->\n  \n  </ion-content>\n'/*ion-inline-end:"/home/koushik/workspace/leyvalley/src/pages/tilk-create/tilk-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_value_global_value__["a" /* GlobalValueProvider */], __WEBPACK_IMPORTED_MODULE_2__services_helper_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], TilkCreatePage);
    return TilkCreatePage;
}());

//# sourceMappingURL=tilk-create.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonTagsInputModule; });
/* unused harmony export IonTagsInput */
/* unused harmony export IonTag */
/* unused harmony export TAG_COLORS */
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(28);





var TAG_COLORS = {
    "default": "#4a8bfc",
    "secondary": "#32db64",
    "danger": "#f53d3d",
    "warn": "#ffc125",
    "gray": "#767676",
    "purple": "#7e60ff",
    "dark": "#222",
    "light": "#bcbcbc"
};
var CITY_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return IonTagsInput; }),
    multi: true
};
var IonTagsInput = /** @class */ (function () {
    function IonTagsInput(plt, ref) {
        this.plt = plt;
        this.ref = ref;
        this._once = false;
        this.mode = '';
        this.readonly = false;
        this.hideRemove = false;
        this.maxTags = -1;
        this.placeholder = '+Tag';
        this.type = 'text';
        this.separatorStr = ',';
        this.canEnterAdd = true;
        this.canBackspaceRemove = true;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ionFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ionBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._editTag = '';
        this._tags = [];
        this._isFocus = false;
    }
    Object.defineProperty(IonTagsInput.prototype, "color", {
        set: function (value) {
            if (TAG_COLORS.hasOwnProperty(value)) {
                this.cssColor = ((TAG_COLORS[value]));
            }
            else {
                this.cssColor = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonTagsInput.prototype, "once", {
        get: function () {
            return this._once;
        },
        set: function (value) {
            if (typeof value === 'string') {
                this._once = true;
            }
            else {
                this._once = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    IonTagsInput.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mode === '') {
            this.plt.ready().then(function () {
                _this.initMode();
            });
        }
    };
    IonTagsInput.prototype.keyAddTag = function () {
        var tagStr = this._editTag.trim();
        if (!this.canEnterAdd)
            return;
        if (!this.verifyTag(tagStr))
            return;
        if (this.once && !this.isOnce(tagStr)) {
            this._editTag = '';
            return;
        }
        this.pushTag(tagStr);
    };
    IonTagsInput.prototype.separatorStrAddTag = function () {
        var lastIndex = this._editTag.length - 1;
        var tagStr = '';
        if (!this.separatorStr)
            return;
        if (this._editTag[lastIndex] === this.separatorStr) {
            tagStr = this._editTag.split(this.separatorStr)[0].trim();
            if (this.verifyTag(tagStr) && this.isOnce(tagStr)) {
                this.pushTag(tagStr);
            }
            else {
                this._editTag = '';
            }
        }
    };
    IonTagsInput.prototype.keyRemoveTag = function () {
        if (!this.canBackspaceRemove)
            return;
        if (this._editTag === '') {
            this.removeTag(-1);
            this._editTag = '';
        }
    };
    IonTagsInput.prototype.btnRemoveTag = function ($index) {
        this.removeTag($index);
    };
    IonTagsInput.prototype.verifyTag = function (tagStr) {
        if (typeof this.verifyMethod === 'function') {
            if (!this.verifyMethod(tagStr)) {
                this._editTag = '';
                return false;
            }
            else {
                return true;
            }
        }
        if (!tagStr.trim()) {
            this._editTag = '';
            return false;
        }
        else {
            return true;
        }
    };
    IonTagsInput.prototype.pushTag = function (tagStr) {
        if (this.maxTags !== -1 && this._tags.length >= this.maxTags) {
            this._editTag = '';
            return;
        }
        this._tags.push(tagStr.trim());
        this.ref.detectChanges();
        this.onChange.emit(this._tags);
        this._editTag = '';
    };
    IonTagsInput.prototype.removeTag = function ($index) {
        if (this._tags.length > 0) {
            if ($index === -1) {
                this._tags.pop();
                this.onChange.emit(this._tags);
            }
            else if ($index > -1) {
                this._tags.splice($index, 1);
                this.onChange.emit(this._tags);
            }
        }
    };
    IonTagsInput.prototype.isOnce = function (tagStr) {
        var tags = this._tags;
        return tags.every(function (e) {
            return e !== tagStr;
        });
    };
    IonTagsInput.prototype._click = function (ev) {
        if (!this._isFocus) {
        }
        this.focus();
        ev.preventDefault();
        ev.stopPropagation();
    };
    IonTagsInput.prototype.blur = function () {
        if (this._isFocus) {
            this._isFocus = false;
            this.ionBlur.emit(this._tags);
        }
    };
    IonTagsInput.prototype.focus = function () {
        if (!this._isFocus) {
            this._isFocus = true;
            this.input.nativeElement.focus();
            this.ionFocus.emit(this._tags);
        }
    };
    IonTagsInput.prototype.writeValue = function (val) {
        this._tags = val;
    };
    IonTagsInput.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._tags);
    };
    IonTagsInput.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    IonTagsInput.prototype.setValue = function (val) {
        this._tags = val;
        if (this._tags) {
            this._onChanged(this._tags);
        }
    };
    IonTagsInput.prototype.initMode = function () {
        this.mode = this.plt.is('ios') ? 'ios' : this.plt.is('android') ? 'md' : this.plt.is('windows') ? 'mp' : 'md';
    };
    return IonTagsInput;
}());
IonTagsInput.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ion-tags-input',
                providers: [CITY_PICKER_VALUE_ACCESSOR],
                template: "\n  <div class=\"iti-tags-wrap\">\n    <ion-tag  *ngFor=\"let tag of _tags; let $index = index;\"\n              [tag]=\"tag\"\n              [mode]=\"mode\"\n              [color]=\"cssColor\"\n              [allowClear]=\"!hideRemove && !readonly\"\n              (onClear)=\"btnRemoveTag($index)\">\n    </ion-tag>\n  </div>\n  <input #tagsInput\n         [hidden]=\"readonly\"\n         [disabled]=\"readonly\"\n         class=\"iti-input\" [type]=\"type\"\n         [placeholder]=\"placeholder\"\n         [(ngModel)]=\"_editTag\"\n         (blur)=\"blur()\"\n         (keyup.backspace)=\"keyRemoveTag($event); false\"\n         (keyup)=\"separatorStrAddTag()\"\n         (keyup.enter)=\"keyAddTag()\">\n  ",
                host: {
                    'class': 'tit-border-color ion-tags-input',
                    '[style.border-bottom-color]': '_isFocus ? cssColor : null',
                    '[class.active]': '_isFocus',
                    '[class.readonly]': 'readonly'
                },
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                styles: [".ion-tags-input{border-bottom:1px solid #e5e5e5;-webkit-transition:border-bottom-color .15s ease;transition:border-bottom-color .15s ease;padding:5px;display:block}.ion-tags-input .iti-tag-color{background-color:#4a8bfc;color:#fff}.ion-tags-input.active{border-bottom-color:#4a8bfc}.ion-tags-input .iti-tag{display:block;float:left;font-family:sans-serif;font-size:1.3rem;font-weight:400;margin-right:5px;margin-bottom:5px;padding:4px 10px;max-height:30px;border-radius:0}.ion-tags-input .iti-tag.iti-tag-ios{border-radius:13px}.ion-tags-input .iti-tag.iti-tag-md{border-radius:4px}.ion-tags-input .iti-input{background:0 0;border:0;color:#777;font-family:sans-serif;font-size:13px;font-weight:400;outline:0;padding:5px;width:80px}.ion-tags-input a.iti-tag-rm::before{content:\" x\";cursor:pointer;font-weight:700;color:#fff}.ion-tags-input.active.tit-border-color.readonly,.ion-tags-input.tit-border-color.readonly{border:none}"]
            },] },
];
IonTagsInput.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* Platform */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
IonTagsInput.propDecorators = {
    "mode": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "readonly": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "hideRemove": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "maxTags": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "placeholder": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "type": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "separatorStr": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "canEnterAdd": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "canBackspaceRemove": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "verifyMethod": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "color": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "once": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "onChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "ionFocus": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "ionBlur": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "input": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['tagsInput',] },],
    "_click": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
};
var IonTag = /** @class */ (function () {
    function IonTag() {
        this._color = TAG_COLORS['default'];
        this.allowClear = true;
        this.onClear = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(IonTag.prototype, "color", {
        set: function (value) {
            if (value !== 'random') {
                this._color = value;
            }
            else {
                var keys = Object.keys(TAG_COLORS);
                var max = keys.length + 1;
                var index = Math.floor(Math.random() * max);
                this._color = ((TAG_COLORS[keys[index]]));
            }
        },
        enumerable: true,
        configurable: true
    });
    
    return IonTag;
}());
IonTag.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ion-tag',
                template: "\n  <span>\n    {{tag}}\n    <a class=\"iti-tag-rm\"\n       [hidden]=\"!allowClear\"\n       (click)=\"onClear.emit(tag)\"></a>\n </span>\n  ",
                host: {
                    'class': 'iti-tag iti-tag-color',
                    '[class.iti-tag-md]': 'mode === "md"',
                    '[class.iti-tag-ios]': 'mode === "ios"',
                    '[class.iti-tag-wp]': 'mode === "wp"',
                    '[style.background-color]': '_color'
                },
                styles: []
            },] },
];
IonTag.ctorParameters = function () { return []; };
IonTag.propDecorators = {
    "tag": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "allowClear": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "mode": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "onClear": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "color": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var IonTagsInputModule = /** @class */ (function () {
    function IonTagsInputModule() {
    }
    return IonTagsInputModule;
}());
IonTagsInputModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicModule */],
                    __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* ReactiveFormsModule */]
                ],
                declarations: [IonTagsInput, IonTag],
                exports: [IonTagsInput, IonTag],
                entryComponents: [IonTagsInput, IonTag]
            },] },
];
IonTagsInputModule.ctorParameters = function () { return []; };


//# sourceMappingURL=ionic-tags-input.js.map


/***/ })

});
//# sourceMappingURL=17.js.map