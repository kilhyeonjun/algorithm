const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const [N, ...arr] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\s/).map(v => +v);

let stack = [];
let i = 1;
let answer = '';
while (arr.length !== 0) {
    if (stack[stack.length - 1] === arr[0]) {
        arr.shift();
        stack.pop();
        answer += '-\n';
        continue;
    }

    if (i === N + 1) {
        answer = 'NO';
        break;
    };
    stack.push(i++);
    answer += '+\n';
}
console.log(answer);