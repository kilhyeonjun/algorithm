const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const [T, ...arr] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\n/);

let temp, cnt;
console.log(
    arr.map(v => {
        temp = v.split('');
        cnt = 0;
        for (let i = 0; i < temp.length; i++) {
            cnt += temp[i] === '(' ? 1 : -1;
            if (cnt === -1) return 'NO';
        }
        if (cnt === 0) return 'YES'
        return 'NO';
    }).join('\n')
);