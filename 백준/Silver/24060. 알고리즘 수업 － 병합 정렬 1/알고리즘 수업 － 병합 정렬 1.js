const fs = require('fs');
const [N, K, ...arr] = fs.readFileSync(__dirname + "/dev/stdin").toString().trim().split(/\s/);

const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    let mid = Math.ceil(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    let result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    result = [...result, ...left.slice(i, left.length), ...right.slice(j, right.length)];
    if (target === -1) {
        if (cnt + result.length >= K) target = result[K - cnt - 1];
        cnt += result.length;
    }
    return result
}

let cnt = 0, target = -1;
mergeSort(arr.map(num => +num));
console.log(target);
