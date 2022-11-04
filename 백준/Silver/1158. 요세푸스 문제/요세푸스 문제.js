const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const [N, K] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\s/).map(n => +n);

const arr = new Array(+N).fill(false);
const answer = []
let cnt = 0, i = 1;
while (answer.length < N) {
    if (!arr[i - 1]) cnt++;
    if (cnt === K) {
        answer.push(i);
        arr[i - 1] = true;
        cnt = 0;
    }
    if (i === N) i = 1;
    else i++;
}

console.log(`<${answer.join(', ')}>`);