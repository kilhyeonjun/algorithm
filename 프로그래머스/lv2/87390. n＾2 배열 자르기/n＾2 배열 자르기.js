function solution(n, left, right) {
    const answer = [];
    for(let i = left; i <= right; i++) {
        const x = i % n + 1;
        const y = Math.floor(i / n) + 1;
        answer.push(x>y?x:y);
    }
    return answer;
}