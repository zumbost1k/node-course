import express from 'express';
import mongoose from 'mongoose';
import Post from './schemas/Post';

const PORT = 5000;
const dbURL = 'mongodb://127.0.0.1:27017/clocking_system';
const app = express();

//преобразовываем данные из запроса из json в js
app.use(express.json());
app.get('/', async (req, res) => {
  const { author, title, content, picture } = req.body;
  const post = await Post.create({ author, title, content, picture });
  res.status(200).send('Hello, world!');
});

async function startApp() {
  try {
    await mongoose.connect(dbURL, {});
    app.listen(PORT, () => {
      console.log('server started on port ' + PORT);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
