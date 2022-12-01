const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
let bracket = fs.readFileSync(__dirname + filePath).toString().trim().split('');

let stack = [];
let tmp = 1;
let answer = 0;
for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] === '(') {
        stack.push(bracket[i]);
        tmp *= 2;
    }
    else if (bracket[i] === '[') {
        stack.push(bracket[i]);
        tmp *= 3;
    }
    else if (bracket[i] === ')') {
        if (!stack[stack.length - 1] || stack[stack.length - 1] === '[') {
            answer = 0;
            break;
        }
        if (bracket[i - 1] === '(') answer += tmp;
        stack.pop();
        tmp = tmp / 2;
    } else {
        if (!stack[stack.length - 1] || stack[stack.length - 1] === '(') {
            answer = 0;
            break;
        }
        if (bracket[i - 1] === '[') answer += tmp;
        stack.pop();
        tmp = tmp / 3;
    }
}
console.log(stack.length ? 0 : answer);