function solution(n) {
    let answer = 0;
    while(n !== 0){
        if(n % 2 === 1) {
            n--;
            answer++;
        }
        n = n / 2;
    }
    return answer;
}