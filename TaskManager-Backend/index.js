const express = require('express');
const app=express();

const user = require('./routes/userroutes');
const task = require('./routes/taskroutes');
const db=require('./config/db');
const bodyParser=require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); 


app.use('/user',user);
app.use('/task',task);


// app.get("/testing", (req, res) => {
// 	res.send("Hello Valet").status(200)
// })


app.listen(3000, ()=>{
    console.log("Server Started Successfully");
})
