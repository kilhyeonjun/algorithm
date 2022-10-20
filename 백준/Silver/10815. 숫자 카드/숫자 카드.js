const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "/example.txt";
const [N, arr1, M, arr2] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\n/);

const map = new Map();
arr1.split(/\s/).forEach(n => map.get(n) || map.set(n, 1));
console.log(arr2.split(/\s/).map(n => map.get(n) || 0).join(' '));