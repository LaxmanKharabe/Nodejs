const fs = require('fs');
const numb = 100;

process.nextTick(()=>console.log("process.nextTick()"));

setImmediate(()=>console.log("setimmidiate()"));

setTimeout(()=>console.log("setTimeout()"), 0);

fs.readFile("./file.text", "utf-8", ()=>{
    console.log("file reading callback executed")
});

process.nextTick(()=>console.log("process.nextTick()"));

Promise.resolve().then(()=>console.log("Promise"))

const printVal = (val) => {
    console.log("Print Val", val);
}
printVal(numb)
console.log("Last line of the file.");


/* 


O/P:

Print Val 100
Last line of the file.
process.nextTick()
process.nextTick()
Promise
setTimeout()
file reading callback executed
setimmidiate()


*/