function solution(targets) {
    targets.sort((a,b)=>a[1]-b[1]);
    let answer = 0;
    let prev = -1;
    
    for(const [s, e] of targets){
        if(prev <= s){
            prev = e;
            answer++;
        }
    }
    
    return answer;
}