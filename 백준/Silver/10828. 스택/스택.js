const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const [N, ...arr] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\n/);

const stack = [];
console.log(
    arr.map(key => {
        switch (key) {
            case 'pop':
                return stack.pop() || -1;
            case 'size':
                return stack.length;
            case 'empty':
                return stack.length === 0 ? 1 : 0;
            case 'top':
                return stack[stack.length - 1] || -1;
            default:
                [key, X] = key.split(' ');
                if (key === 'push') stack.push(+X)
                break;
        }
    }).filter(v => v !== undefined).join('\n')
);