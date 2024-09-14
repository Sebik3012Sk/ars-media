const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const databaseRoute = require("./routes/getData"); 
const databasePostGet = require("./routes/getPost");

const PORT = process.env.PORT || 2007;

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