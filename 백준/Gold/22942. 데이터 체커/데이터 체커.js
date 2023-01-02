const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
let [N, ...arr] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\n/).map(v => v.split(' ').map(n => +n));

const solution = (arr) => {
    arr = arr.map((v, i) => [[v[0] - v[1], true, i], [v[0] + v[1], false, i]]).flat().sort((a, b) => a[0] - b[0]);
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1]) {
            stack.push(arr[i]);
            continue;
        }
        if (arr[i][2] !== stack.pop()[2]) return 'NO';
    }
    return 'YES';
}

console.log(solution(arr));