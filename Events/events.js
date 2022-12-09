const events = require("events");

const event = new events.EventEmitter();

// event.addListener("sayHello", () => {
//     console.log("Hello everyone");
// });

function logData(name, message) {
    console.log("Hello ", name, " ", message);
};

function logData(name) {
    console.log("Hello ", name);
};


// function logData2() {
//     console.log("Hello everyone 2");
// };
// function logData3() {
//     console.log("Hello everyone 3");
// };
// function logData4() {
//     console.log("Hello everyone 4");
// };
// event.once("sayHello", logData);
event.on("sayHello", logData);

event.emit("sayHello", "Ajeet", "Are you Okay ?");
event.emit("sayHello", "Tejas", " dsnfv hdf ghr?");
// event.emit("sayHello");
// event.emit("sayHello");
event.off("sayHello", logData);

event.emit("sayHello", "Ajeet", "Are you Okay ?");