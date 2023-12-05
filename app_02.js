const fs = require('fs');
const text =
  'темный мрачный коридор, я на цыпочках, как вор, пробираюсь чуть дыша, чтобы не вспугнуть';
//записываем в файл
const pathToFile = 'd02/n_1.txt';
fs.writeFileSync(pathToFile, text, { encoding: 'utf8', flag: 'a' });
//write file from array
const text2 = [
  'темный мрачный коридор,',
  'я на цыпочках, как вор,',
  'пробираюсь чуть дыша,',
  'чтобы не вспугнуть',
];
const arrayText = fs.writeFileSync('d02/n_2.txt', text2.join('\r\n'), {
  encoding: 'utf8',
  flag: 'w',
});
