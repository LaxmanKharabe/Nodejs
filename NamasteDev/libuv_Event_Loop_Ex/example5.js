
const fs = require("fs");
setImmediate(() => console.log("setImmediate 1"));

Promise.resolve("Promise1").then(console.log)

fs.readFile("./text-file.txt", "utf-8", () => {
    setTimeout(() => console.log("setTimeout"), 0)
    setImmediate(() => console.log("setImmediate 2"))
    process.nextTick(() => {
        Promise.resolve("Promise2").then(console.log)
        process.nextTick(() => console.log("Next Tick 3"));
        console.log("Next Tick sync line 1")
    })
    Promise.resolve("Promise3").then(console.log)
    console.log("file reading CB executed");
})

process.nextTick(() => console.log("Next Tick 1"))

process.nextTick(() => {
    Promise.resolve("Promise4").then(console.log)
    process.nextTick(() => console.log("Next Tick 2"));
    console.log("Next Tick sync line 2")
})

/*
Next Tick 1
Next Tick sync line 2
Next Tick 2
Promise1
Promise4
setImmediate 1
file reading CB executed
Next Tick sync line 1
Next Tick 3
Promise3
Promise2
setImmediate 2
setTimeout
*/