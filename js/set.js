'use strict';

let fruits = new Set();


fruits.add('Banana');
fruits.add('Apple');
fruits.add('Strawberry');
fruits.add('Papaya');

fruits.forEach(fruit => {
        document.getElementById('output').innerHTML += fruit+",";
})