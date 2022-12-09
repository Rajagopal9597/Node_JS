const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res)   => {
    // fs.readFile("bigfile.txt", (err, data) => {
    //     res.end(data);
    // })

    const rstream = fs.createReadStream("bigfilehjytjyuj.txt", {encoding: "utf-8"});

    // rstream.on("data", (chunk) => {
    //     res.write(chunk);
    // })
    // rstream.on("end", (err) => {
    //     console.log("ALl the data from file has been read");
    //     res.end();
    // })
    rstream.on("error", (err) => {
        res.end("There is is some while reading the file");
    });

    rstream.pipe(res);

})

const rstream = fs.createReadStream("bigfile.txt", {encoding: "utf-8"});
const wstream = fs.createWriteStream("new.txt");

rstream.pipe(wstream);

wstream.on("finish", () => {
    console.log("file writing is finished");
});
// for (let i =0; i< 1e6; i++) {
//     wstream.write("jnzfvsdhugvreg hfd gnvu cvb bfg hbr hb grshgrgdf nv c");
// }
//  wstream.end();
server.listen(5000, () => console.log("Server is up at port 5000"));