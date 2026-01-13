const fs = require('fs');
const https = require('https');

const numb = 100;

process.nextTick(()=>console.log("process.nextTick()"));

setImmediate(()=>console.log("setimmidiate()"));

setTimeout(()=>console.log("setTimeout()"), 0);

fs.readFile("./text-file.txt", "utf-8", ()=>{
    console.log("file reading callback of large file executed")
});
setTimeout(()=>console.log("setTimeout will be executed after 5 sec"), 5000);

https.get('https://dummyjson.com/products', (res) => {
  console.log("HTTP response callbacks run in the event loop's poll phase; if response data isn't ready immediately, their logs can appear after check-phase callbacks (e.g. setImmediate)");
});

Promise.resolve().then(()=>console.log("Promise"))

fs.readFile("./text-file.txt", "utf-8", ()=>{
    console.log("file reading callback of small file executed")
});

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
Promise
setTimeout()
setimmidiate()
file reading callback of large file executed
file reading callback of small file executed
HTTP response callbacks run in the event loop's poll phase; if response data isn't ready immediately, their logs can appear after check-phase callbacks (e.g. setImmediate)
setTimeout will be executed after 5 sec

*/