function solution(n, lost, reserve) {
    const lostFilter = lost.filter(item=>!reserve.includes(item));
    lostFilter.sort();
    const reserveFilter = reserve.filter(item=>!lost.includes(item));
    reserveFilter.sort();
    let answer = n-lostFilter.length;
    
    for(let i=0; i<lostFilter.length; i++){
        for(let j=0; j<reserveFilter.length; j++){
            if(lostFilter[i]-1 === reserveFilter[j] || lostFilter[i]+1 === reserveFilter[j]) {
                reserveFilter.splice(j, 1);
                answer++;
                break;
            }
        }
    }
    
    return answer;
}