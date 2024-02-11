const { myName, myHobbies, myFavoriteNumber } = require('./multiple-export');
const { myName: myOtherName, myFriendName } = require('./export-and-import');
const gretting = require('./single-export');

console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

gretting(myName);

console.log(myOtherName);
console.log(myFriendName);
