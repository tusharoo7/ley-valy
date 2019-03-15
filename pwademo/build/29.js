webpackJsonp([29],{

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilkStatPageModule", function() { return TilkStatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilk_stat__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MilisecondtotimePipe = /** @class */ (function () {
    function MilisecondtotimePipe() {
    }
    MilisecondtotimePipe.prototype.transform = function (value) {
        var abc = "";
        var sww = "";
        var seconds = (value / 1000);
        var xyz = (seconds / 60).toString();
        var minutes = parseInt(xyz, 10);
        seconds = seconds % 60;
        var hours = parseInt((minutes / 60).toString(), 10);
        minutes = minutes % 60;
        if (hours > 0) {
            abc = hours + ':';
        }
        else {
            abc = '';
        }
        if (minutes > 0) {
            sww = minutes + ':';
        }
        else {
            sww = '';
        }
        return abc + sww + seconds;
    };
    MilisecondtotimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "milisecondtotime"
        })
    ], MilisecondtotimePipe);
    return MilisecondtotimePipe;
}());
var TilkStatPageModule = /** @class */ (function () {
    function TilkStatPageModule() {
    }
    TilkStatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tilk_stat__["a" /* TilkStatPage */], MilisecondtotimePipe
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tilk_stat__["a" /* TilkStatPage */]),
            ],
        })
    ], TilkStatPageModule);
    return TilkStatPageModule;
}());

//# sourceMappingURL=tilk-stat.module.js.map

/***/ })

});
//# sourceMappingURL=29.js.map