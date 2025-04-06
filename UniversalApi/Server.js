const express = require("express")
const app = express()
const port = 8000
const colors=require("colors")
const dotenv = require("dotenv");
const connectDb=require("./db")


dotenv.config();
connectDb()
app.get('/api/get', (req, res) => {
    res.send('hello world');
});
app.listen(port,()=>{ console.log(`server is running on port ${port}`.bgCyan.green)})  











