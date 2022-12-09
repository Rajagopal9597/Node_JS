const express = require('express')
const app = express()
const data = require("./InitialData");
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.get("/api/student",(req,res) => {
    res.json(data);
})

app.get("/api/student/:id",(req,res) => {
    const index = data.findIndex(element => element.id == req.params.id);
    const student = data[index];
    res.json(student)
})
var studentId =data.length - 1;
app.post("/api/student",(req,res) => {
    data.push({
        id:studentId,
        name:req.body.name,
        currentClass:req.body.currentClass,
        division:req.body.division
    })
    studentId = studentId + 1;
    res.json({studentId});
})

app.delete("/api/student/:id", (req,res) => {
     const index = data.findIndex(element => element.id === req.params.id);
     const student = data.splice(index,1);
     
     res.json({student});
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   