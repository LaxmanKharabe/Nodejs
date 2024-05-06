const fs = require('fs');
fs.writeFile('myFile1.txt', "My datasdds", (err)=>{
    if(!err){
        console.log("Task Done1");
    }
})
fs.writeFile('myFile.txt', "My data", (err)=>{
    if(!err){
        console.log("Task Done");
    }
})
