const express = require("express")
const app = express()

//routes

app.get('/',(req, res)=>{
    res.send("Hello Selva API")
})

app.listen(3000, ()=> {
    console.log("Running on port 3000")
})