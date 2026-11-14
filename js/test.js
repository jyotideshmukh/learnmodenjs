

const calculateArea = function(redii){
    let output = [];
    for (let i =0; i< redii.length; i++){
        output.push(Math.PI* redii[i] * redii[i] );
    }
    return output;

}

const calculateCircumference = function(redii){
    let output = [];
    for (let i =0; i< redii.length; i++){
        output.push(Math.PI* redii[i] * 2 );
    }
    return output;
    
}
function area(r){
    return Math.PI * r* r;
}
function circumfernce(r){
    return Math.PI * r* 2;
}
function diameter(r){
    return  r* 2;
}
const calculateOutput = function(redii,calculate){
    let output = [];
    for (let i =0; i< redii.length; i++){
        output.push(calculate(redii[i]) );
    }
    return output;
}

