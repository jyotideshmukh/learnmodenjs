class NotNumberError extends Error{
    constructor(msg) { 
        super(msg); 
    } 
    
}
function getNumber(num){
try {
    if(isNaN(num))
    throw new NotNumberError("oops "+num+" is not number");
    else 
    console.log("Provided num is "+num);
  } catch ({ name, message }) {
    console.log(name); // "TypeError"
    console.log(message); // "oops"
    //console.log()
  }
}
getNumber("10 is ");




  