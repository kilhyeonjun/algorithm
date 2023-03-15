function solution(brown, yellow) {
    for(let i = 1; i <= yellow; i++){
        if(yellow % i !== 0) continue;
        const x = i;
        const y = yellow / i;
        if(brown === x * 2 + y * 2 + 4) return x > y ? [x + 2, y + 2] : [y + 2, x + 2];
    }
}