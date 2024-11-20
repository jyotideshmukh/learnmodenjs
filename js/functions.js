//function statement aka function declarion
function a(){
    console.log("a called");
}
//function expression

var b = function(){
 console.log("b called");
}
// Anonymous function
/*
function (){

}
*/
//what is hoisting
// in above example when we call a() and b() before declartion, a will give results due to hoisting
// but b will not give results as it creates memory when variable is declared

/*
a() -- It will execute
b()-- It will give reference error
function a(){
    console.log("a called");
}
//function expression

var b = function(){
 console.log("b called");
}

*/
//named function expressions

/* var b = function xyz(){

}
In this case we can not call xyz() - It will give error
*/

//difference between parameters and argument
// the variables which hold values of passed argument is nown as parameter
function abc(parameter1, parameter2){

}
abc("arg1", "arg2") ; //what we pass is argument


//first class functions
/*
we can pass function as argument and event we can return function from function
so the ability to pass function as argumnet and return value as function
 are called first class functions


 function abc(param){
    //returnin anonymous function
    return function (){

    }
 }

 function xyz(){

 }
 abc(xyz) // xyz function passed as argument
*/