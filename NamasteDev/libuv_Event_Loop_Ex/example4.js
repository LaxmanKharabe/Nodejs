
const fs = require("fs");
setImmediate(()=>console.log("setImmediate 1"));

Promise.resolve("Promise").then(console.log)

fs.readFile("./text-file.txt", "utf-8", ()=>{
    setTimeout(()=>console.log("setTimeout"), 0)
    setImmediate(()=>console.log("setImmediate 2"))
    process.nextTick(()=>console.log("Next Tick 2"))
    console.log("Large file reading CB executed");
})

process.nextTick(()=>console.log("Next Tick 1"))


/*
Next Tick 1
Promise
setImmediate 1
Large file reading CB executed
Next Tick 2
setImmediate 2
setTimeout
*/