require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const vetRouter = require("./routers/vet");
const patientRouter = require("./routers/patient");
const medHistRouter = require("./routers/medicalhistory");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(vetRouter);
app.use(patientRouter);
app.use(medHistRouter);

mongoose.connect(process.env.MONGOURL)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(`Can't connecto to MongoDB: ${err}`));

app.get("/", (req, res) => {
    console.log("Hello World!!");
    res.status(200).send("Hello from backend");
});

app.listen(process.env.PORT, () => {
    console.log(`>> Listen on port ${process.env.PORT}`);
});