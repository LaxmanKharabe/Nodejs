const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 2 // Thread size becomes 2 instead of 4

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("1 crypto done");
})
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("2 crypto done");
})
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("3 crypto done");
})
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("4 crypto done");
})
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("5 crypto done");
})
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("6 crypto done");
})