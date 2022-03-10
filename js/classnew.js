'use strict';

//created Item Class
class Item {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }
    //declartaion of static variable
    static maxItems = 10;

    //declartaion of static method
    static getMaxItemsDetailsHelper(){
        return 'Max items can be added are '+Item.maxItems;
    }
    getDetails () {
        return ` ${this.name} - ${this.category}`
    }
}
//created new class PurchasedItem and extended Item
class PurchasedItem extends Item {
    constructor(name, category, price) {
        super(name, category); //calling super constructor
        this.price = price;
    }

    static getMaxItems(){
        return '3/'+super.maxItems; //calling of Items static variable in extended class
    }

    //created new method of PurchasedItem for displying details with price
    getDetailsWithPrice() {
        return ` ${this.name} - ${this.category} - ${this.price}`
    }
}

var item = new Item('Coffee', 'food');
item.category = 'Drink';

var purchaseditem = new PurchasedItem('Sugar', 'food', 2.5);


//displays 'Sugar - food' -- called inherited method
document.getElementById('output').innerHTML = purchaseditem.getDetails();

//displays 'Sugar - food - 2.5'
document.getElementById('output').innerHTML = purchaseditem.getDetailsWithPrice();

//how to call static methods
document.getElementById('output').innerHTML = Item.getMaxItemsDetailsHelper()