const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.setHeader('content-type', "text/html");
        res.write('<head><title>Streams(Chunks, buffer)</title></head>');
        res.write(`<body>
            <form action="/submit-details" method="POST">
            <label for="username">User Name:</label>
            <input type="text" id="username" name="username" required>
            <br><br>
            <label>Gender:</label>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>

            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>
            <br><br>
            <button type="submit">Submit</button></form>
            </body>`);  
        return res.end()
    } else if(req.url.toLocaleLowerCase() == '/submit-details' && req.method == 'POST'){
        const body = [];
        req.on('data', chunk =>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', ()=>{
            const parseData = Buffer.concat(body).toString();
            console.log(parseData);
            
        })
        fs.writeFileSync('user.txt', 'Laxman kharabe');

        res.statusCode = 302;
        res.setHeader('location', '/')
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