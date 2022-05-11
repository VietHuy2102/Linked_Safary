export class Safary<T>{
    month : T;
    money : T;
    next : Safary<T> | null = null

    constructor(month:T,money:T) {
        this.month = month;
        this.money = money;
    }
}