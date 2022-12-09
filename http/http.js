const http = require("http");
const qstring = require("querystring");

const server = http.createServer((req, res) => {
    const qparams = qstring.parse(req.url.split("?")[1]);
    const url = req.url.split("?")[0];

    if (url == "/") {
        res.writeHead(200, {
            "Content-type": "text/plain",
            "Keep-Alive": 10
        });
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>First HTML Page</title>
        </head>
        <body>
            <h1>First HTML Page...</h1>
        </body>
        </html>`);
        res.end();
    } else if (url == "/aboutus") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end("<h1> Welcome node about us page </h1>");
    }else if (url == "/user") {
        res.writeHead(200, { "Content-type": "text/json" });
        res.write(JSON.stringify({
            name : qparams.name?qparams.name: "Ajeet",
            email: qparams.email,
            age: qparams.age
        }));
        res.end();
    }  else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.write("<h1> PAGE NOT FOUND </h1>");
        res.end();
    }

});

server.listen(3000, () => console.log("The server is up at port 3000"));