/*
for calculation of muliple values of array-- we can use map function

e.g 
consider we have given radious of multiple circles in array and we need to find out area,
 circumfernce and diameter of all these circles -- 

 How to acheive this -
 using hi order function or map function

 What is high order function -
 the function which takes another function as parameter is called Hi order functions

 another way to use map function, map function is also a Hi order function

*/

const radius = [2,4,7,1,9];
const output =[];
function calculateArea(){
for(let i=0; i<radius.length; i++){
    output.push(Math.PI * radius[i] * radious[i] )

}
}



