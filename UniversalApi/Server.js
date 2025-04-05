const express = require("express")
const app = express()
const port = 8000
const colors=require("colors")

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(port,()=>{ console.log(`server is running on port ${port}`.bgCyan.green)})  











