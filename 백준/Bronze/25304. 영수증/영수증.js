const fs = require('fs');
const [X, N, ...arr] = fs.readFileSync(__dirname + "/dev/stdin").toString().trim().split(/\s/);
let sum = 0;
for (let i = 0; i < arr.length; i += 2) sum += arr[i] * arr[i + 1];
console.log(X == sum ? 'Yes' : 'No')