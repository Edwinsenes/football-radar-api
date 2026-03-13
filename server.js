const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

let history = []

app.get("/", (req,res)=>{
    res.send("Football Studio Radar Online")
})

app.post("/result",(req,res)=>{
    const {result} = req.body

    history.push(result)

    if(history.length > 50){
        history.shift()
    }

    console.log("NEW RESULT:", result)

    res.json({
        status:"saved",
        history
    })
})

app.get("/history",(req,res)=>{
    res.json(history)
})

app.listen(3000, ()=>{
    console.log("Radar running")
})
