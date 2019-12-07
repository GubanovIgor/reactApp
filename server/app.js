const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const port = 3001;

mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true})

const app = express();

const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
};
app.use(corsMiddleware);

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(port, () => console.log(`port listening on ${port}`));
