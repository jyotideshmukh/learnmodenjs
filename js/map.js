'use strict';

/*
//Maps are key value pair
//setting map and sets key value pair
let fruits = new Map();


fruits.set(1, 'Banana');
fruits.set(2, 'Apple');
fruits.set(3, 'Strawberry');

fruits.delete(2);
fruits.set(4, {
    type: 'Orange',
    color: 'orange',
    flavour: 'orangy'
});

//document.getElementById('output').innerHTML += fruits.get(1)+",";
fruits.forEach(fruit => {
    //console.log(typeof fruit)
    if(typeof fruit == 'object')
        document.getElementById('output').innerHTML += fruit.type+",";
    else
    document.getElementById('output').innerHTML += fruit+",";
})

*/

//we can set object as key, and function as value

let users = new Map();

/*users.set({
    name: 'Jyoti',
    email: 'jyoti@gmail.com'
},function(user){
    document.getElementById('output').innerHTML += user.name+" ("+user.email+")";
});*/
let userObj = {
    name: 'Jyoti',
    email: 'jyoti@gmail.com'
};

users.set(userObj,function(user){
    document.getElementById('output').innerHTML += user.name+" ("+user.email+")";
});

users.set({
    name: 'Jyoti',
    email: 'jyoti@gmail.com'
},function(user){
    document.getElementById('output').innerHTML += "<br>("+user.email +") "+user.name;
});

users.forEach((value, key) =>{
    //here value is function in users map
    value(key);
})



//it will  false in isUserExist if we are assigning onjects directly to map -coz both objects are different
/*
let isUserExist = users.has({
    name: 'Jyoti',
    email: 'jyoti@gmail.com'
});
console.log(isUserExist);*/

////it will  true in isUserExist as userObj is same
let isUserExist = users.has(userObj);
console.log(isUserExist);
