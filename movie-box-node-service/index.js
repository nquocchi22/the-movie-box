const express = require('express');
const jwt = require("jsonwebtoken");
const fs   = require("fs");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setup for html parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

//connect to MongoDb
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true }).then(
  () => { console.log("open mongodb connection successfully."); },
  err => { console.console.error("fail to open mongodb connection.");  }
);

app.get("/api/ping", (req, res) => {
  console.log("Ping to the service.")
  res.end("The service is up and running.");
});

//starting server
app.listen(3000, () => console.log('Server running on port 3000!'));
