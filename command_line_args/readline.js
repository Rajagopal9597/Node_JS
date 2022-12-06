const readline = require("readline");

// define from where you will take input and show your output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Pls Enter your name ", (name) => {
//     console.log("Hello ", name);
//     rl.question("How are you ? ", (greets) => {
//         console.log("I am ", greets);
//         rl.close();
//     })

// });

const numArr = [];

rl.question("Pls eneter the size of an array :", async (size) => {
    for (let i = 0; i < size; i++) {
        await new Promise((res) => {
            rl.question("Please enter the number :", (num) => {
                numArr.push(num);
                res();
            })
        })
    }
    console.log(numArr);
    rl.close();
})

