"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var linkedList = new LinkedList_1.LinkedList();
linkedList.add("thang 1", 1000000);
linkedList.add("thang 2", 1000000);
linkedList.add("thang 3", 1000000);
linkedList.add("thang 4", 1000000);
linkedList.show();
console.log(linkedList.show());
var sum = 0;
for (var i = 0; i < linkedList.show().length; i++) {
    sum += linkedList.show()[i];
}
console.log(sum);
