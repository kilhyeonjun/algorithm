function solution(n) {
    let answer = n + 1;
    const count = n.toString(2).replaceAll('0', '').length
    while(true) {
        if(answer.toString(2).replaceAll('0', '').length === count) break;
        answer++;
    }
    return answer
}