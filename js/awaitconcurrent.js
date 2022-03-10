'use strict';

async function init(){
    let start = Date.now();
    document.getElementById('output').innerHTML="0 : init()";
    const userPromise = getUserData();
    const welcomePromise = getWelcomeString();

    let user = await userPromise;
    document.getElementById('output').innerHTML += "<br>"+(Date.now() -start ) + " : "+ `${user.name} -${user.email}`;
    let welcomeStr = await welcomePromise;
    document.getElementById('output').innerHTML += "<br>"+(Date.now() -start ) + " : "+ welcomeStr;
}

function getUserData(){
    return new Promise((resolve,reject)=>{
        let user = {
            name: 'Jyoti',
            email: 'jyoti@gmail.com'
        }
        setTimeout(()=>{
            resolve(user);
        }, 2000)
    })
}

function getWelcomeString(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("Welcome to Javascript learning await and async");
        }, 2000)
    })
}

//console.log(init())
init()