const { myName, myHobbies, myFavoriteNumber } = require('./multiple-export');
const {
  myName: myOtherName,
  myFriendName,
  myGreatHobbies,
} = require('./export-and-import');
const gretting = require('./single-export');

// Imports from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

// change array myHobbies
myHobbies.push('climbing');

// Imports from single_export
gretting(myName);

// Imports from export-and-import
console.log(myOtherName);
console.log(myFriendName);
console.log(myGreatHobbies);
