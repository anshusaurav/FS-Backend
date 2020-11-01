require("dotenv").config();
const express = require("express");
const path = require("path");
require('dotenv').config();
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRouter = require('./routes/api')
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
app.use(cors());

const uri = process.env.MONGO_DB;
mongoose.connect(uri, {
  useNewUrlParser: true
}, function (err, db) {
  if (err) {
    console.log(err);
  }
  console.log('Connected to database');
  mongoose.set('debug', true);

});

app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});




// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    errors: {
      message: err.message,
      error: {}
    }
  })
})


// finally, let's start our server...
var server = app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port ' + server.address().port)
})
