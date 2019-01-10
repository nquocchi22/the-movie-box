const mongoose = require('mongoose');

//connect to MongoDb
mongoose.connect('mongodb://localhost:27017/themoviebox', { useNewUrlParser: true }).then(
  () => { console.log("open mongodb connection successfully."); },
  err => { console.console.error("fail to open mongodb connection.");  }
);