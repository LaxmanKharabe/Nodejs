/*Example of nested exports*/

const obj = require("./mainModule");  // we have directly used folder name instead of file name index.js
const o = require("./practice.js");

const constVariable = 20;
let variableLet = 10;
console.log(constVariable, "constVariable", variableLet, o.constVariable, o.variableLet);

obj.sum.sum(5, 3);  
obj.sub.sub(10, 4);

/* output: Module loaded: sumModule.js executed
Sum is: 8
Subtraction is: 6 */