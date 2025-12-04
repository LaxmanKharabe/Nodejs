const http = require('http');
const {sum} = require('./sumModule');
const server = http.createServer((req, res)=>{
    res.setHeader("content-type", "text/html");
    if(req.url.toLocaleLowerCase() == '/'){
        res.write(`
            <body>
                <h1>Welcome...</h1>
            </body>
        `)
        return res.end()
    } else if(req.url == '/calculator'){
        res.write(`
            <body>
                <form action='/calculate-result' method='POST'>
                    <input type='text' name='num1' />
                    <input type='text' name='num2' />
                    <input type='submit' value='sum' />
                </form>
            </body>    
        `)
        return res.end();
    } else if(req.url == '/calculate-result' && req.method === 'POST'){
        let data = [] 
        req.on('data', (chunk)=>{
            data.push(chunk);
        })
        req.on('end', ()=>{
            const parsedData = Buffer.concat(data).toString()
            const result = sum(parsedData);
            res.write(`<h1>Received Sum: ${result}</h1>`);
            return res.end();
        })
    }
})


const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`server is listening at:${PORT}`);
})