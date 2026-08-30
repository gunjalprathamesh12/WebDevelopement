let info = require("./fruits");
console.log(info);
console.log(info[0]);
console.log(info[0].name);
console.log(info[0].color);
//whenever we try to acces programs function or info from another directroy
/*
exp:-
fruits:-
        apple
        banana
        orange
outside directory there is file script.js
then require keyword in script.js for extracting data it will search for index.js (index.js is a starting point)
*/
