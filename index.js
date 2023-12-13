import express from 'express';
const PORT = 5000;

import mongoose from 'mongoose'; // Correct import
const dbURL =
  'mongodb+srv://user:user@misha.ojl6144.mongodb.net/?retryWrites=true&w=majority';
const app = express();

//преобразовываем данные из запроса из json в js
app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json('сервер работает нормально123');
});

async function startApp() {
  try {
    await mongoose.connect(dbURL);
    app.listen(PORT, () => {
      console.log('server started on port ' + PORT);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
