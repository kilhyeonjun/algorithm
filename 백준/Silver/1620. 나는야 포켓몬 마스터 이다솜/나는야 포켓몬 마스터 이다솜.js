const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "/example.txt";
const [N, M, ...arr] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\s/);

let answer = '';
const map = new Map();
for(let i = 0; i < N; i++) map.set(String(i+1), arr[i]), map.set(arr[i], i+1);
for(let i = N; i < +N + +M; i++) answer += map.get(arr[i]) + '\n';
console.log(answer);