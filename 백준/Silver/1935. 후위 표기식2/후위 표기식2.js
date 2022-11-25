const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const [N, exp, ...arr] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\n/);

const stacks = [];
exp.split('').forEach(v => {
    if (!['*', '+', '/', '-'].includes(v)) return stacks.push(+arr[v.charCodeAt() - 65]);

    const v2 = stacks.pop();
    const v1 = stacks.pop();
    switch (v) {
        case '*':
            return stacks.push(v1 * v2);
        case '/':
            return stacks.push(v1 / v2);
        case '+':
            return stacks.push(v1 + v2);
        case '-':
            return stacks.push(v1 - v2);
        default:
            break;
    }
})

console.log(stacks[0].toFixed(2))