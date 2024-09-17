// myModule.js

var module1 = require('./module1.js');
var module2 = require('./module2.js');

function myFunction(arg) {
  console.log('This is my module. arg:', arg);
  module1.module1Function(arg);
  module2.module2Function(arg);
}

module.exports = {
  myFunction: myFunction,
};
