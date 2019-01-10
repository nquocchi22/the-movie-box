require("@babel/register")({
  //using babel for transform js es6 syntax
});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var user = require('./user/index');


//setup for html parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

//configure authentication
user.authen.facebook()

app.get("/api/ping", (req, res) => {
  console.log("Ping to the service.");
  res.end("The service is up and running.");
});

//starting server
app.listen(3000, () => console.log('Server running on port 3000!'));
