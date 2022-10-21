const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "/example.txt";
const [N, M, ...arr] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\s/);

const set = new Set();
for (let i = 0; i < +N; i++) set.add(arr[i]);

let cnt = 0;
for (i = +N; i < +M + +N; i++) set.has(arr[i]) && cnt++;
console.log(cnt)