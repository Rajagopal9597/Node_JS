var http = require("http");
//const express = require("express");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const url = req.url;
    if(url == "/welcome"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Welcome to Dominos")
    }else if(url == "/contact"){
        res.writeHead(200,{"Content-type":"application/json"});
        res.write(JSON.stringify({  
                 phone: '18602100000', 
                 email: 'guestcaredominos@jublfood.com' 
           })
           );
           res.end();

    }else{
        res.writeHead(404, { "Content-type": "text/html" });
        res.write("<h1> PAGE NOT FOUND </h1>");
        res.end();

    }
  
}
httpServer.listen(8081, () => console.log("The server is up at port 8081"));
module.exports = httpServer;