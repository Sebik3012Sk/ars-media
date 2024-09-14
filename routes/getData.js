const express = require("express");
const connection = require("../database/connectDb");
const router = express.Router();

router.get("/get-data",async (req,res) => {
    const data_users = await connection.query("SELECT * FROM users")
    res.json(data_users);
})

module.exports = router;