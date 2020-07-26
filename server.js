const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes/api");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;


mongoose.connect(process.env.URI || 'mongodb://localhost/mernPostDB' ,{useCreateIndex: true, useNewUrlParser:true, useUnifiedTopology:true});

mongoose.connection.on('connected', () =>{
    console.log("Mongoose is connected!!!");
});


//Data Parsing
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//HTTP request Logger
app.use(morgan('tiny'));

app.use("/api", routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));