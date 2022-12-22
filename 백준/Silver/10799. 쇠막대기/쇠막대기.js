const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const arr = fs.readFileSync(__dirname + filePath).toString().trim().split('');;

const obj = {};
const stack = [];
arr.forEach((v, i) => {
    if(v === ')'){
        if(arr[i - 1] === '(') stack.forEach(key => obj[key]++);
        else stack.shift();
        return;
    }
    if(arr[i + 1] !== ')') {
        obj[i] = 1;
        stack.push(i);
    }
})
console.log([...Object.keys(obj)].reduce((prev, key) => prev + obj[key], 0));