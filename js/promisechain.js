'use strict';

let myPromise = new Promise((resolve,reject)=>{

    let user = {
        name: 'Jyoti',
        email: 'jyoti@gmail.com'
    }
    setTimeout(()=>{
        resolve(user)
    }, 2000)
});

let getUserDataDetails = (user)=>{
    document.getElementById('output').innerHTML = `${user.name} - ${user.email}`;
    return new Promise((resolve,reject)=>{
        user.favouriteDrink = 'Lemon water';
        user.currentDrink = 'soda';
        setTimeout(()=>{
            resolve(user)
        }, 2000)

    });
}
myPromise.then(getUserDataDetails)
    .then((user)=>{
    document.getElementById('output').innerHTML = `${user.name} - ${user.email}- ${user.currentDrink}`;
}).catch((error)=>{
    document.getElementById('output').innerHTML = error ;
})

document.getElementById('output').innerHTML = 'This is going tonreplace by user data';