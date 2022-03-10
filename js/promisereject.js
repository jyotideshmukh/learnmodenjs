'use strict';

let myPromise = new Promise((resolve,reject)=>{

    let user = {
        name: 'Jyoti',
        email: 'jyoti@gmail.com'
    }
    setTimeout(()=>{
        //if not handlled, will throw error
        //Uncaught (in promise) sorry, we cant fecth user data
        reject('sorry, we cant fetch user data');
    }, 2000)
});

myPromise.then((user)=>{
    document.getElementById('output').innerHTML = `${user.name} - ${user.email}`;
}).catch((error)=>{
    document.getElementById('output').innerHTML = error ;
})


document.getElementById('output').innerHTML = 'This is going tonreplace by user data';