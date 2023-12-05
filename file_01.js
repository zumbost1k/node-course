const fs = require('fs');

const data = fs.readFileSync('./d_05/example.json', { encoding: 'utf8' });
const parsedData = JSON.parse(data);
console.log(parsedData);
