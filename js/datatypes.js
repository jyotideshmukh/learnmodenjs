var globalVariable = 5;
var x = 6;

{
    let y = 5;
    console.log("Inside block let" + y);
    console.log("Inside x=" + x);
    x = 13;
    console.log("Inside x=" + x);
}
y = 10;
console.log("Y" + y);
console.log("x" + x);

var arr = [1, 2, 3];
console.log("Array length" + arr.length);

var myname = "Jyoti";

console.log("My name is " + myname);
console.log("Length of my name is = " + myname.length);
console.log("second character of \"y\" myname is assesed by index 1" + myname[1]);
var authors = [
    {
        id: "1",
        name: "Jyoti",
        email: "jyotipawar2003@gmail.com"
    },
    {
        id: "2",
        name: "Santosh",
        email: "santosh87@gmail.com"
    },
     {
        id: "3",
        name: "Rutu",
        email: "rutupawarhere008@gmail.com"
    },

];



var posts = [
    {
        id:1,
        title: "How to give gyan to others",
        description: " tu he keele nahis, tu te kele nahis, ase kele nahis\n tase keles",
        author: authors[1]

    },
    {
        id:2,
        title: "How to do chugalya",
        description: " Daaadaaaa, mummy bagh kay karte, kashi ragane baghate bagh\n "+
        "mummy ne asa keles bagh",
        author: authors[2]

    },
    {
        id:3,
        title: "How to learn Javascript",
        description: " var, let and const are types of varibale declaration",
        author: authors[0]

    },
];

console.log(authors[0]);
console.log(authors[1]);

console.log("post "+posts[0].title+ "is written by "+posts[0].author.name);
console.log("post "+posts[1].title+ "is written by "+posts[1].author.name);
console.log("post "+posts[2].title+ "is written by "+posts[2].author.name);