const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const exp = fs.readFileSync(__dirname + filePath).toString().trim().split('');

let answers = new Set();
const getCombinations = (arr, num) => {
    const results = [];
    if (num === 1) return arr.map(v => [v]);
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, num - 1);
        const attached = combinations.map(v => [fixed, ...v]);
        results.push(...attached);
    });
    return results;
}

const arr = [];
exp.forEach((v, index) => {
    if (v === '(') return arr.push([index]);
    if (v === ')') {
        for (let i = arr.length - 1; i > -1; i--) {
            if (arr[i].length === 1) {
                arr[i].push(index);
                break;
            }
        }
    }
})

const indexArr = [...arr.keys()];
for (let i = 1; i < indexArr.length + 1; i++) {
    const combinations = getCombinations(indexArr, i);
    combinations.forEach(array => {
        let temp = [...exp];
        array.forEach(index => arr[index].forEach(v => temp[v] = ''));
        answers.add(temp.join(''));
    })
}

answers = [...answers].sort();
console.log(answers.join('\n'));