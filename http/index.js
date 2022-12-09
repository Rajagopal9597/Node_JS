const http=require("http");
const fs=require("fs");
const file=fs.readFileSync('index.html');
const server=http.createServer((req,res)=>{
    res.writeHead(404,{
        'Content-type':'text/html'
    })
    res.end(file)
})
server.listen(5000,()=>{console.log("The server is up at port 5000");})