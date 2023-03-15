function solution(n, a, b) {
    let answer = 1;
    while(true) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        if (a === b) break;
        answer++;
    }
    return answer;
}