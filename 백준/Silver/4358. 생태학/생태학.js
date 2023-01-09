const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const arr = fs.readFileSync(__dirname + filePath).toString().trim().split(/\n/);

const obj = {};
const length = arr.length;
arr.forEach(item => obj[item] = (obj[item] || 0) + 1);
console.log(Object.keys(obj).sort().map(key => `${key} ${(obj[key] / length * 100).toFixed(4)}`).join('\n'));