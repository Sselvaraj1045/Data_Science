const express = require("express")
const app = express()



app.use(express.json)
//routes


app.get('/',(req, res)=>{
    res.send("Hello Selva API")
})

app.get('/newblog',(req, res)=>{
    res.send("Hello New Blog")
})

app.post('/Login', (req, res)=>{
    console.log(req.body)
    res.send(req.body);
})









