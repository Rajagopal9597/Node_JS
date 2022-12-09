const fs = require("fs/promises");
const os = require("os");
const path = require("path");

// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.platform());

// CRUD -- CREATE READ UPDATE DELETE

// CREATE a file 

// fs.readFile()
// fs.writeFile("file.txt", "console.log('First file')", (err) => {
//     console.log(err);
// });

// fs.writeFileSync("file2.txt", "sfnbsdhfvheg nrf gfd gj ");

// // READ a file
// fs.readFile("file.txt", { encoding: "utf-8" }, (err, data) => {
//     if (err)
//         console.log(err);
//     else
//         console.log(data);
// })

// // UPdate a file

// fs.appendFile("file3.txt", "\nI cds fjdbghbh dcivf dhv hfe ghr", (err) => {
//     console.log(err);
// });

// // DELETE a file

// fs.unlink("file.js", (err) => {
//     console.log(err);
// })

// // RENAME a file

// fs.rename("file3.txt", "newfile.txt", (issue) => {
//     console.log(issue);
// })

// if (os.platform() == "win32") {
//     fs.readFile("C:\\NOD_NOV\\LEC3\\http.js", { encoding: "utf-8" }, (err, data) => {
//         console.log((data));
//     })
// } else {
//     fs.readFile("C://NOD_NOV//LEC3//http.js", { encoding: "utf-8" }, (err, data) => {
//         console.log((data));
//     })
// }

// // fs.readFile(path.join(__dirname, "test", "file2.txt"), { encoding: "utf-8" }, (err, data) => {
// //     console.log((data));
// // })

// fs.readFile(path.join(__dirname, "..", "LEC3", "http.js"), { encoding: "utf-8" }, (err, data) => {
//     console.log((data));
// })


// // console.log(__dirname);

// fs.rename(path.join(__dirname, "fs.js"), path.join(__dirname, "test", "fs.js"), (err) => {
//     console.log(err);
// });

// // Delete all the files from test folder 

// fs.readdir(path.join(__dirname, "test"), (eror, files) => {
//     if (!eror) {
//         for (let i = 0; i < files.length; i++) {
//             fs.unlink(path.join(__dirname, "test", files[i]), (err) => {
//                 console.log(err);
//             });
//         }
//     }
// })
async function readAFile(filename){
    const data = await fs.readFile(filename, {encoding: "utf-8"});
    console.log(data);
}

readAFile("file.txt");
