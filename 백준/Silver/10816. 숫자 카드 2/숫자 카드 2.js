const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "/example.txt";
const [N, arr1, M, arr2] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\n/);

const arrN = arr1.split(' ');
const arrM = arr2.split(' ');

const obj = {};
arrN.forEach(v => obj[v] = (obj[v] || 0) + 1);
console.log(arrM.map(v => obj[v] || 0).join(' '));