/*Example of nested exports*/

const obj = require("./mainModule");  // we have directly used folder name instead of file name index.js

obj.sum.sum(5, 3);  
obj.sub.sub(10, 4);

/* output: Module loaded: sumModule.js executed
Sum is: 8
Subtraction is: 6 */