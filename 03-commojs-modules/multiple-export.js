const myName = 'Yana';
const myHobbies = ['swimming', 'boxing', 'cycling'];
const myFavoriteNumber = 77;

console.log('Text from the multiple-export CommonJS ');

//module.exports and export reference the same object memory
module.exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
