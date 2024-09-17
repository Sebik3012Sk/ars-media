const express = require("express");
const router = express.Router()

router.post("/post-user",(req,res) => {
    const resultPost = req.body;
    console.log(resultPost);
    res.json(resultPost);
})

module.exports = router;