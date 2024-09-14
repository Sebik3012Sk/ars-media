const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const databaseRoute = require("./routes/getData"); 
const databasePostGet = require("./routes/getPost");

const getRandomPort = () => Math.floor(Math.random() * (65535 - 1024 + 1)) + 1024;

const PORT = process.env.PORT || getRandomPort();

app.get("/",(req,res) => {
    res.send("API Database");
})

app.get("/get-post",cors(),databasePostGet);
app.get("/get-data",cors(),databaseRoute);

app.listen(PORT,(err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`[SERVER] : APP Running on http://localhost:${PORT}`);
        console.log(`[SERVER] : APP Data Running on http://localhost:${PORT}/get-data`);
        console.log(`[SERVER] : APP Data Running on http://localhost:${PORT}/get-post`);
    }
})