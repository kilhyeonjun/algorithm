const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "/example.txt";
const S = fs.readFileSync(__dirname + filePath).toString().trim();

const set = new Set();
for (let i = 0; i < S.length; i++) {
    for (let j = i + 1; j < S.length + 1; j++) {
        set.add(S.slice(i, j));
    }
}
console.log(set.size);