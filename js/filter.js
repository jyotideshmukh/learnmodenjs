let fruits = ['Apple','Banana','Strawberry','Pineapple','Orange','Mango'];

let fruitsWitheletter = [];

//using traditionl way
/*
fruits.forEach(fruit =>{

    if(fruit.includes("e"))
    fruitsWitheletter.push(fruit);
})
*/
fruitsWitheletter = fruits.filter(f => f.includes('e'));
document.getElementById('output').innerHTML = fruitsWitheletter.join(",")

let users = [
    {
    name: 'Jyoti',
    email: 'jyoti@gmail.com',
        stars: 5
},
    {
        name: 'Santosh',
        email: 'j@gmail.com',
        stars: 5
    },
    {
        name: 'Rutu',
        email: 'r@gmail.com',
        stars: 3
    },
];

let stars = users.reduce((stars, user)=> stars += user.stars,0);
document.getElementById('output').innerHTML = stars

let userEmails = users.map(user => user.email);

document.getElementById('output').innerHTML += "Users email ="+userEmails.join(",");