import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 5000;
const dbURL = 'mongodb://127.0.0.1:27017/clocking_system';
const app = express();

//transform json data from requests to js
app.use(express.json());

app.use('/api',router)

async function startApp() {
  try {
    //connect to the db before server started
    await mongoose.connect(dbURL, {});
    app.listen(PORT, () => {
      console.log('server started on port ' + PORT);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
