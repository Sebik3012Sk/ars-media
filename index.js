const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(cors());
const databaseRoute = require("./routes/getData"); 
const databasePostGet = require("./routes/getPost");
const postUser = require("./routes/postUser");

const PORT = 3000;

app.get("/",(req,res) => {
    res.render("index");
})

app.get("/get-post",cors(),databasePostGet);
app.get("/get-data",cors(),databaseRoute);
app.use("/post-user",cors(),postUser);


app.listen((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`[SERVER] : APP Running on http://localhost:${PORT}`);
        console.log(`[SERVER] : APP Data Running on http://localhost:${PORT}/get-data`);
        console.log(`[SERVER] : APP Data Running on http://localhost:${PORT}/get-post`);
    }
})