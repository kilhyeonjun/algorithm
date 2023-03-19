function solution(k, dungeons) {
    let answer = 0;
    const dfs = (dungeons, k, cnt) => {
        if(dungeons.length===0) {
            if(answer < cnt) answer = cnt;
            return;
        }
        for(let i=0; i<dungeons.length; i++){
            let count = cnt;
            let sum = k;
            if(k >= dungeons[i][0]) {
                sum -= dungeons[i][1];
                count++;
            }
            dfs([...dungeons.slice(0, i), ...dungeons.slice(i+1)], sum, count);
        }
    }
    dfs(dungeons, k, 0);
    return answer;
}