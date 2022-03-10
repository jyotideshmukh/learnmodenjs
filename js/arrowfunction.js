'use strict';

const username = {
    name : 'Jyoti',
    email: 'jyotip@gmail.com'
}
/*function display(){
    if(true){
        username.email = 'jyoti@gmail.com';
        username.name = 'jyotiP';
    }
    document.getElementById('output').innerHTML = "Name="+username.name+" ,Email="+username.email;
}*/

/*const display = () =>{
    if(true){
        username.email = 'jyoti@gmail.com';
        username.name = 'jyotiP';
    }
    document.getElementById('output').innerHTML = "Name="+username.name+" ,Email="+username.email;
}*/


//arrow function with one argument
/*const displayName = (name) =>{
    document.getElementById('output').innerHTML = "Name="+name+" ,Email="+username.email;
}*/

//arrow function in single line with single statement
/*
const displayName = (name ) => document.getElementById('output').innerHTML = "Name="+name+" ,Email="+username.email;

displayName('Rutu')*/

/*
function nameString(name, isTrue){

    return `${name} ( ${username.email})`
} */

/*const nameString = name => `${name} ( ${username.email})`


document.getElementById('output').innerHTML = nameString('Rutu');*/


/*
const students = [

    {
        name: 'Rutu',
        std: 5
    },
    {
        name: 'Jyoti',
        std: 10
    }
];
const studentNames = [];
//traditional way
/*students.forEach(function(student){
    studentNames.push(student.name)
});*/

//arrow function
/*
students.forEach(student => studentNames.push(student.name));

document.getElementById('output').innerHTML = studentNames.join(",");
 */


//arrow function  'this' variable

/*document.getElementById('mybutton').addEventListener('click',function(){
    console.log(this);
    function displayValue(){
       return this.getAttribute('mybutton');
    }

});*/

/*document.getElementById('mybutton').addEventListener('click',function(){
    console.log(this); // it will give <input name="mybutton" id="mybutton" value="Click Me">
    function displayValue (){
        //this will give error
        //Cannot read properties of undefined (reading 'getAttribute')
        return this.getAttribute('id');
    }
    document.getElementById('output').innerHTML = displayValue();
});*/

//gives output
//mybutton value =Click Me
/*document.getElementById('mybutton').addEventListener('click',function(){
    console.log(this);
    const displayValue = () => {
        //it will return "mybutton value =Click Me"
        return this.getAttribute('id') +" value ="+this.value;
    }
    document.getElementById('output').innerHTML = displayValue();
});*/


/*
//used two arrow functions, this will not work in inner arrow function
//as outer this referencing to window
document.getElementById('mybutton').addEventListener('click', () =>{
    //it will return window object
    console.log(this);
    const displayValue = () => {
        //arrowfunction.js:108 Uncaught TypeError: this.getAttribute is not a function
        return this.getAttribute('id') +" value ="+this.value;
    }
    document.getElementById('output').innerHTML = displayValue();
});
*/

document.getElementById('mybutton').addEventListener('click', (e) =>{
    //it will return window object
    console.log(this);
    const displayValue = () => {
        //mybutton value =Click Me
        return e.currentTarget.getAttribute('id') +" value ="+e.currentTarget.value;
    }
    document.getElementById('output').innerHTML = displayValue();
});
