console.log(arguments.callee.toString());

// Любой модуль Common.js помещается в node.js в виде анонимной функции с 5 параметрами

// // function (exports, require, module, __filename, __dirname) {
// console.log(arguments.callee.toString());

// }

console.log(exports);
