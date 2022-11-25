const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const [N, ...arr] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\n/);

class Deque {
    constructor() {
        this.arr = [];
    }
    push_front(value) {
        this.arr.unshift(value);
    }
    push_back(value) {
        this.arr.push(value);
    }
    pop_front() {
        return this.arr.shift() || -1;
    }
    pop_back() {
        return this.arr.pop() || -1;
    }
    size() {
        return this.arr.length;
    }
    empty() {
        return this.arr.length === 0 ? 1 : 0;
    }
    front() {
        return this.arr[0] || -1;
    }
    back() {
        return this.arr[this.arr.length - 1] || -1;
    }
}

const deque = new Deque();
console.log(
    arr.map(item => {
        const [key, value] = item.split(' ');
        return deque[key](value);
    }).filter(v => v !== undefined).join('\n')
);