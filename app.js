const express = require('express')
const app = express()

app.get('/profile', (req, res)=>{
   res.send("Hello world")
})
app.listen(3000)