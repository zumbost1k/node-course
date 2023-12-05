const fs = require('fs');

// читаем содержимое файла
const pathToFile = 'd02/info.txt';

const data = fs.readFileSync(pathToFile, { encoding: 'utf8', flag: 'w' });
// console.log(data);
// console.log(typeof data);

// раазбиваем файл строка за строкой

let dataArr = data.split('\r\n').filter(Boolean);
console.log(dataArr)
