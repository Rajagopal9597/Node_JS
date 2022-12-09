const express = require("express");
const faker = require("faker");


const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

const users = [];
for (let i =0; i < 10; i++){
    users.push({
    name: faker.name.findName(),
    email: faker.internet.email(),
    age: Math.ceil(Math.random() * 100)
    })
}

app.get("/user", (req, res) => {
    res.json({
        name: req.query.name,
        email: req.query.email,
        age: req.query.age
    })
});

app.get("/", (req, res) => {
    res.render("user.ejs", {users});
})


app.get("*", (req, res) => {
    res.status(404).send("PAGE IS NOT FOUND");
})

app.listen(5000, () => console.log("Server is up at 5000"));