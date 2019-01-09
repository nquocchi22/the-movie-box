const express = require('express');
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

//starting server
app.listen(3000, () => console.log('server running on port 3000!'))
