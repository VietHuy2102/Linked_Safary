import {LinkedList} from "./LinkedList";
let linkedList = new LinkedList();
linkedList.add(`thang 1`,1000000);
linkedList.add(`thang 2`,1000000);
linkedList.add(`thang 3`,1000000);
linkedList.add(`thang 4`,1000000);


linkedList.show();
console.log(linkedList.show())

let sum = 0
for (let i = 0; i < linkedList.show().length; i++) {
    sum += linkedList.show()[i];
}
console.log(sum)