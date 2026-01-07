console.log("Module loaded: sumModule.js executed");

let variable = "This is a variable inside sumModule.js";

const sum = (a, b) => {
    console.log(`Sum is: ${a + b}`);
};
// module.exports = { sum };
// module.exports = { variable };
module.exports = { sum, variable };
// module.exports = { sumVal: sum, variableVal: variable };   // we can do either line no. 10 or this line no. 11