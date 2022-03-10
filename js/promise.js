'use strict';

let myPromise = new Promise((resolve,reject)=>{

    let user = {
        name: 'Jyoti',
        email: 'jyoti@gmail.com'
    }
    setTimeout(()=>{
        resolve(user);
    }, 2000)
});

myPromise.then((user)=>{
    document.getElementById('output').innerHTML = `${user.name} - ${user.email}`;
})

document.getElementById('output').innerHTML = 'This is going tonreplace by user data';