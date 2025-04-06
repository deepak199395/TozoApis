const express = require("express")
const app = express()
const port = 8000
const colors=require("colors")
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require("dotenv");
const connectDb=require("./db")



// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
dotenv.config();

connectDb()
app.get('/api/get', (req, res) => {
    res.send('hello world tozo');
});

//app.use("/aws/api/v1/auth",require("./MVC/Rounter/AuthRouter"))
//app.use("/aws/api/v1/auth", require("./MVC/Router/AuthRouter"));

app.listen(port,()=>{ console.log(`server is running on port ${port}`.bgCyan.green)})  











