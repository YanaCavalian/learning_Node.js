function greeting(name) {
  console.log('Hello', name);
}
console.log(__filename);

module.exports = greeting;

//  // DON'T DO THIS
// // exports.greeting
// // module.exports remains {}
