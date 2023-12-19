const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');

const PORT = process.env.PORT || 5000;
const dbURL = 'mongodb://127.0.0.1:27017/mydb';

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(dbURL);
    app.listen(PORT, () => {
      console.log('server  started on port ' + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
