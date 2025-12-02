const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/products'){
        res.setHeader('content-type', "text/html");
        res.write('<head><title>This res title</title></head>');
        res.write('<body>this is response1</body>');
        console.log(req.url, req.method, req.headers, "request");
        return res.end();
    }

    res.setHeader('content-type', "text/html");
    res.write('<head><title>This res title</title></head>');
    res.write('<body>this is response</body>');
    return res.end();
})

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`Server is listening...${PORT || 3001}`)
})