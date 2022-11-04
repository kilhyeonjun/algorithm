const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const [N, ...arr] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\n/);

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
        const node = new Node(item)
        if (this.head === null) {
            this.head = node;
            this.head.next = null;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.length += 1;
    }

    pop() {
        if (this.empty() == 1) return -1
        const popItem = this.head;
        this.head = this.head.next;
        this.length -= 1;
        return popItem.item;
    }

    size() {
        return this.length;
    }

    empty() {
        if (this.length == 0) {
            return 1;
        } else {
            return 0;
        }
    }

    front() {
        if (this.empty() == 1) return -1;
        return this.head.item;
    }

    back() {
        if (this.empty() == 1) return -1;
        return this.tail.item;
    }
}


const queue = new Queue();
console.log(
    arr.map(key => {
        switch (key) {
            case 'pop':
                return queue.pop();
            case 'size':
                return queue.size();
            case 'empty':
                return queue.empty();
            case 'front':
                return queue.front();
            case 'back':
                return queue.back();
            default:
                return queue.push(key.split(' ')[1]);
        }
    }).filter(v => v !== undefined).join('\n')
);