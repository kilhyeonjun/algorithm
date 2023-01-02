const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const [N, ...arr] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\s/).map(n => +n);

const stack = [[0, 0]];

console.log(arr.map((v, i) => {
    if (stack[stack.length - 1][0] < v) stack.pop();
    stack.push([v, i + 1]);
    for (let j = stack.length - 2; j > -1; j--)
        if (stack[j][0] > v)
            return stack[j][1];
    return 0;
}).join(' '));