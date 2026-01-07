// const obj = require("./sumModule.js");
// obj.sum(5, 3);
/* Output:
Module loaded: sumModule.js executed
Sum is: 8
*/


// const varFromModule = require("./sumModule.js");
// console.log(varFromModule.variable);
/* Output:
Module loaded: sumModule.js executed
This is a variable inside sumModule.js
*/


/*const obj = require("./sumModule.js");
obj.sum(5, 3);
console.log(obj.variable);*/
/* Output:
Module loaded: sumModule.js executed
Sum is: 8
This is a variable inside sumModule.js
*/

// const obj = require("./sumModule.js");
// obj.sumVal(5, 3);
// console.log(obj.variableVal);
/* Output:
Module loaded: sumModule.js executed
Sum is: 8
This is a variable inside sumModule.j
*/

const {sum, variable} = require("./sumModule.js");
sum(5, 3);
console.log(variable);
/* Output:
Module loaded: sumModule.js executed
Sum is: 8
This is a variable inside sumModule.js
*/





/*notes: 1️) Core Module System Rules (Node.js)

Every file is a module

Each .js file has its own scope

Variables are not global unless explicitly attached to global

Modules run only once

When a module is loaded, Node executes it once and caches the result

Module wrapper

Node internally wraps each file like:

(function (exports, require, module, __filename, __dirname) {
  // your code
});

2) require() Rules (CommonJS)
What require() can load

Core modules

const fs = require('fs');
const path = require('path');


Third-party modules (node_modules)

const express = require('express');


Local files

const utils = require('./utils');
const config = require('../config/appConfig');

*/