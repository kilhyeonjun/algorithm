function solution(n, k) {
    let answer = 0;
    n.toString(k).split('0').forEach((item)=>{
        if(isSosu(+item)) answer++;
    });
    function isSosu(number) {
        if(!number) return false;
        if(number === 1) return false;
        for(let i=2; i<=Math.sqrt(number); i++){
            if(number % i === 0) return false;
        }
        return true;
    }
    
    return answer;
}