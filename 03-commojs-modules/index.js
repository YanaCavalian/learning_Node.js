const { myName, myHobbies, myFavoriteNumber } = require('./multiple-export');
const gretting = require('./single-export');

console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

gretting(myName);
