const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('./route/route')


const app = express();

app.use(bodyParser.json())


app.use('/',route)




  


const string = "mongodb+srv://shiva:ZxJf1KONMThYSpCU@cluster0.yuxls.mongodb.net/Radon_project_four"

mongoose.connect(string, {useNewUrlParser: true}) /// mongoose().connect
.then(()=>console.log("mongoDB is connected"))
.catch((err)=>console.log(err));



const port = process.env.PORT || 3000
app.listen(port,function(){
    console.log("app is running on the port"+port)
})


