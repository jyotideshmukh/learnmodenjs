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



 const calculateArea = function (radius){
    let output= [];
    for(let i=0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i] )

    }
    return output;
}

const calculateCircumference = function (radius){
    let output= [];
    for(let i=0; i<radius.length; i++){
        output.push(2 * Math.PI * radius[i]  )

    }
    return output;
}
const calculateDiameter = function (radius){
   let output= [];
    for(let i=0; i<radius.length; i++){
        output.push( radius[i] * 2 )

    }
    return output;
}

/* but above logic is duplicated and this is not correct method to write coding,
we can solve this using hi order function
*/
function area(radius){
    return Math.PI * radius * radius;
}

function circumfernce(radius){
    return 2 *Math.PI * radius ;
}

function diameter(radius){
    return 2  * radius ;
}
