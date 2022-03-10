// var myname = 'Jyoti';
//
// function init(){
//     document.getElementById('output').innerHTML = myname;
// }
//
// init();

//----------------------------------------------------------
'use strict';

// let myname;
//
// function display(){
//     if(true){
//         let email = 'jyoti@gmail.com'
//     }
//     document.getElementById('output').innerHTML = "Name="+myname+" ,Email="+email;
// }
//  myname = 'Jyoti';
// display(); // it will print value of myname in output element
//main.js:16 Uncaught ReferenceError: email is not defined
//at display (main.js:16:77)
//at main.js:19:1

//---------------------------------------

// const username ='JyotiD';
// let email;
// function display(){
//     if(true){
//         let email = 'jyoti@gmail.com'
//      }
//      document.getElementById('output').innerHTML = "Name="+username+" ,Email="+email;
// }
//
// display()

//output will be
//Name=JyotiD ,Email=undefined
//-----------------------------------------------

// const username ='JyotiD';
// let email;
// function display(){
//     if(true){
//          email = 'jyoti@gmail.com';
//         username = 'jyotiP';
//     }
//     document.getElementById('output').innerHTML = "Name="+username+" ,Email="+email;
// }
//
// display()

//output will be error
//main.js:48 Uncaught TypeError: Assignment to constant variable.
//    at display (main.js:48:18)
//at main.js:53:1

//---------------------------------------


const username = {
    name : 'Jyoti',
    email: 'jyotip@gmail.com'
}
function display(){
    if(true){
        username.email = 'jyoti@gmail.com';
        username.name = 'jyotiP';
    }
    document.getElementById('output').innerHTML = "Name="+username.name+" ,Email="+username.email;
}

display()

//output will be error
//Name=jyotiP ,Email=jyoti@gmail.com