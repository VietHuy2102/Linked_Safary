import {Safary} from "./Safary";
export class LinkedList<T>{
    head : Safary<T> | null;
    tail : Safary<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;

    }
    add(month : T, money : T): void{
        let safary = new Safary(month,money);
        if (!this.head){
            this.head = safary;
            this.tail = safary;
        } else {
            safary.next = this.head;
            this.head = safary
        }

    }
    show(){
        let arr=[]
        let temp= this.head;
        while (temp.next){
            arr.push(temp.money)
            temp = temp.next;
        }
        return arr
    }

}