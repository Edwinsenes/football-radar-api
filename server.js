const express = require("express")

const app = express()

let roundId = 0

function randomCard(){
const cards=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
return cards[Math.floor(Math.random()*cards.length)]
}

app.get("/api/results",(req,res)=>{

roundId++

const home=randomCard()
const away=randomCard()

const values={
A:14,K:13,Q:12,J:11,
"10":10,"9":9,"8":8,"7":7,
"6":6,"5":5,"4":4,"3":3,"2":2
}

let result="DRAW"

if(values[home]>values[away]) result="HOME"
if(values[away]>values[home]) result="AWAY"

res.json({
roundId,
home,
away,
result
})

})

app.listen(3000)
