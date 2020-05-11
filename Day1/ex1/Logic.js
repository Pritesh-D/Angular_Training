"use strict";
exports.__esModule = true;
var Data_1 = require("./Data");
var Logic = /** @class */ (function () {
    function Logic() {
        this.stringStore = new Array();
        this.stringStore.push(new Data_1.Data("a"));
        this.stringStore.push(new Data_1.Data("bbb"));
        this.stringStore.push(new Data_1.Data("cc"));
        this.stringStore.push(new Data_1.Data("dddd"));
        this.stringStore.push(new Data_1.Data("eeeeeeeee"));
        this.stringStore.push(new Data_1.Data("hhhhhhh"));
    }
    Logic.prototype.sortByLength = function () {
        this.stringStore.sort(function (a, b) { return a.getDataLength() - b.getDataLength(); });
        return this.stringStore;
    };
    Logic.prototype.reverse = function () {
        var _this = this;
        var result = Array();
        this.stringStore.forEach(function (e, i) {
            result.push(_this.stringStore[_this.stringStore.length - i - 1]);
        });
        this.stringStore = result;
        return this.stringStore;
    };
    Logic.prototype.getStore = function () {
        return this.stringStore;
    };
    Logic.prototype.serializeStore = function () {
        return JSON.stringify(this.stringStore);
    };
    return Logic;
}());
var logic = new Logic();
console.log("Original Store : " + logic.serializeStore());
logic.sortByLength();
console.log();
console.log("Sorted by Length Store : " + logic.serializeStore());
logic.reverse();
console.log();
console.log("Reversed Store : " + logic.serializeStore());
