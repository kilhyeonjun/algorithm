const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const [T, ...arr] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\n/);
let answer = '';

class Node {
    constructor(value) {
        this.value = value;
    }
}

for (let i = 0; i < arr.length; i += 2) {
    const [N, M] = arr[i].split(' ');
    const queue = arr[i + 1].split(' ').map(v => new Node(v));
    const target = queue[M];
    let cnt = 0;
    while (queue.length > 0) {
        const temp = queue.shift();
        if (temp.value < Math.max(...queue.map(v => v.value))) {
            queue.push(temp);
            continue;
        }
        cnt++;
        if (target === temp) break;
    }
    answer += `${cnt}\n`;
}
console.log(answer);