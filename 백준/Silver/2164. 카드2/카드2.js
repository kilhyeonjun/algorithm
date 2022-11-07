const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const N = +fs.readFileSync(__dirname + filePath).toString().trim();

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(item) {
        const node = new Node(item);
        if (this.tail) this.tail.next = node;
        else this.head = node;
        this.tail = node;
        this.length++;
    }

    pop() {
        const item = this.head.item;
        this.head = this.head.next;
        this.length > 0 && this.length--;
        return item;
    }
}

const queue = new Queue();
for (let i = 1; i < N + 1; i++) queue.push(i);

while (queue.length > 1) {
    queue.pop();
    if (queue.length === 1) break;
    queue.push(queue.pop());
}
console.log(queue.head.item);