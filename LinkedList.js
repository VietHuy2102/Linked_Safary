"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Safary_1 = require("./Safary");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.add = function (month, money) {
        var safary = new Safary_1.Safary(month, money);
        if (!this.head) {
            this.head = safary;
            this.tail = safary;
        }
        else {
            safary.next = this.head;
            this.head = safary;
        }
    };
    LinkedList.prototype.show = function () {
        var arr = [];
        var temp = this.head;
        while (temp.next) {
            arr.push(temp.money);
            temp = temp.next;
        }
        return arr;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
