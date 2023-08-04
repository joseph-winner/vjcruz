const express = require("express");
const { send } = require("process");
const app = express();
const port = 3002;
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.status(200), send("Your Here Welcome to Vj Cruz Movie World")
})

app.listen(port), ()=> console.log(`server started at port: ${port}`)