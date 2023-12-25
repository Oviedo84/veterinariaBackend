require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    console.log("Hello World!!");
    res.status(200).send("Hello from backend");
});

app.listen(process.env.PORT, () => {
    console.log(`>> Listen on port ${process.env.PORT}`);
});