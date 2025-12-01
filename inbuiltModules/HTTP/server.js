const http = require('http');

// simple server creation
const server = http.createServer((req, res)=>{
    console.log(req)    ;
})

const PORT = 3000;
//starts listening...

server.listen(PORT, ()=>{
    console.log(`Server running on: http://localhost:${PORT}`);
})