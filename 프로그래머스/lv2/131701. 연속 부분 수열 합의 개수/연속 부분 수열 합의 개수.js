function solution(elements) {
    const set = new Set();
    for(let i=1; i<=elements.length; i++) {
        for(let k=0; k<elements.length; k++) {
            let sum = 0;
            for(let j=k; j<k+i; j++) {
                sum += elements[j % elements.length];
            }
            set.add(sum);
        }
    }
    return set.size;
}