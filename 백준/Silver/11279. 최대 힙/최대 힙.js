const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/example.txt';
const [_, ...arr] = fs.readFileSync(__dirname + filePath).toString().trim().split(/\s/).map(n => +n);

class MaxHeap {
    constructor() {
        this.array = [];
    }
    parentIndex(index) {
        return Math.floor(index - 1 / 2);
    }
    leftChildIndex(index) {
        return index * 2 + 1;
    }

    rightChildIndex(index) {
        return index * 2 + 2;
    }

    swap(a, b) {
        return [this.array[a], this.array[b]] = [this.array[b], this.array[a]];
    }
    push(value) {
        this.array.push(value);
        this.heapifyUp();
    }
    heapifyUp() {
        let currentIndex = this.array.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.array[parentIndex] >= this.array[currentIndex]) break;
            [this.array[currentIndex], this.array[parentIndex]] = [
                this.array[parentIndex],
                this.array[currentIndex],
            ];
            currentIndex = parentIndex;
        }
    }
    poll() {
        const length = this.array.length;
        if (length === 0) return 0;
        if (length === 1) return this.array.pop();
        const max = this.array[0];
        this.array[0] = this.array.pop();
        this.heapifyDown(0);
        return max;
    }
    heapifyDown(index) {
        const leftIndex = this.leftChildIndex(index);
        const rightIndex = this.rightChildIndex(index);
        let maxIndex = index;
        if (this.array[leftIndex] > this.array[maxIndex]) maxIndex = leftIndex;
        if (this.array[rightIndex] > this.array[maxIndex]) maxIndex = rightIndex;
        if (maxIndex !== index) {
            [this.array[index], this.array[maxIndex]] = [this.array[maxIndex], this.array[index],];
            this.heapifyDown(maxIndex);
        }
    }
}

const maxHeap = new MaxHeap();
let answer = '';
arr.forEach((v) => {
    if (v === 0) return answer += `${maxHeap.poll()}\n`;
    maxHeap.push(v);
})
console.log(answer);