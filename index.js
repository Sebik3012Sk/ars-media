const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const databaseRoute = require("./routes/getData"); 

const PORT = 5000 | process.env.PORT;

app.get("/",(req,res) => {
    res.send("API Database");
})

app.get("/get-data",databaseRoute);

app.listen(5000,(err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`[SERVER] : APP Running on http://localhost:${PORT}`);
        console.log(`[SERVER] : APP Data Running on http://localhost:${PORT}/get-data`);
    }
})