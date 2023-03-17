function solution(n, s) {
    let answer = [];
    const temp = s % n; 
    const mok = (s-temp) / n;
    for(let i=0; i<n; i++) {
        answer.push(mok);
    }
    for(let i=0; i<temp; i++) {
        answer[i%n]++;
    }
    answer.sort((a, b)=>a-b);
    if(answer[0]===0) return [-1];
    
    return answer;
}