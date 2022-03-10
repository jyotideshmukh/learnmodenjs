'use strict';

function Item(name, category){
    this.name = name;
    this.category = category;
}

Item.prototype.getDetails = function(){
    return ` ${this.name} - ${this.category }`
}
//created new method of tem for displaying details
function PurchasedItem(name, category, price){
    Item.call(this, name, category);
    this.price = price;
}

//sets the inherited methods and properties of the base class
PurchsedItem.prototype = Object.create(Item.prototype);
PurchasedItem.prototype.constructor = PurchasedItem;

//created new method of PurchasedItem for displying details with price
PurchasedItem.prototype.getDetailsWithPrice = function(){
    return ` ${this.name} - ${this.category } - ${this.price}`
}

var item = new Item('Coffee', 'food');
item.category = 'Drink';

var purchasedItem = new PurchasedItem('Sugar', 'food', 2.5);
purchasedItem.category = 'Drink/Food';

//displays 'Sugar - Drink/Food'
//document.getElementById('output').innerHTML = purchaseditem.getDetails();

//displays 'Sugar - Drink/Food - 2.5'
document.getElementById('output').innerHTML = purchasedItem.getDetailsWithPrice();