function solution(n, computers) {
    let answer = 0;
    const visit = [false];
    
    const goto = (i) => {
        if(visit[i]) return;
        visit[i] = true;
        for(let j=0; j<computers[i].length; j++){
            if(i===j) continue;
            if(computers[i][j] === 1) goto(j);
        }
    }
    
    for(let i=0; i<computers.length; i++){
        if(!visit[i]) {
            goto(i);
            answer++;
        }
    }
    
    return answer;
}