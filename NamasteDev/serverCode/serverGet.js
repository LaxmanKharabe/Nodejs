const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === "/otherRequest"){
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            "name": "Laxman",
            "age": 29
        }));
    }
    // res.end("Hello world!")
});

server.listen(3000);