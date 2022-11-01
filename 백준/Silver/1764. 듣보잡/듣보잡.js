const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "/example.txt";
const [N, M, ...arr] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\s/);

const obj = {};
arr.forEach(v => obj[v] = (obj[v] || 0) + 1);
const answerList = Object.keys(obj).filter(v => obj[v] === 2);
answerList.sort();
console.log(answerList.length);
console.log(answerList.join('\n'));