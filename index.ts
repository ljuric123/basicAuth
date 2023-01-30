const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

const middleware = require("./middleware/middleware");
const router = require("../src/router/router");

const session = require('express-session');

dotenv.config();

const app = express();

app.use(session({
    secret: 'key',
    resave: true,
    saveUninitialized: true
}));

app.use(cors());

mongoose.connect("mongodb://localhost:27017/auth", {useNewUrlParser: true});

app.use(express.json());

app.use("", router)

app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log('Server is running at https://localhost:' + port);
})
