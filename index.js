const fs = require('fs');
const path = require('path');

// проверка существования папки
const f01 = () => {
  const pathToDir = './test';
  if (fs.existsSync(pathToDir)) {
    console.log('file exist');
  } else {
    console.log('file doesnt exist');
  }
};

// f01()

//проверка существования файла
const f02 = () => {
  const pathToFile = './test/info.dat';
  if (fs.existsSync(pathToFile)) {
    console.log('file exist');
  } else {
    console.log('file doesnt exist');
  }
};
// f02()

//вычисление размера файла
const f03 = () => {
  const pathToFile = './test/potter.doc';
  const fileInfo = fs.statSync(pathToFile);
  console.log(fileInfo.size);
};

// f03()

//имя и расширение файла
const f04 = () => {
  const pathToFile = './test/potter.doc';
  console.log(path.basename(pathToFile));
  console.log(path.dirname(pathToFile));
  console.log(path.extname(pathToFile));
  console.log(path.parse(pathToFile));
};

// f04()

//получаем файлы и папки в директории
const f05 = () => {
  const pathToDir = './test';
  const allFiles = fs.readdirSync(pathToDir);
  console.log(allFiles);
  let out = '';
  allFiles.forEach((item) => (out += item + '\n'));
  console.log(out);
};

// f05();
// получить абсолютный путь
const directoruPath = path.join(__dirname, 'test');
console.log(directoruPath);
console.log(directoruPath);