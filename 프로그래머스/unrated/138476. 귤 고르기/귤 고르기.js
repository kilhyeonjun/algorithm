function solution(k, tangerine) {
    let answer = 0;
    const obj = {};
    tangerine.forEach((item)=>{
        obj[item] = (obj[item] || 0) + 1;
    })
    const arr = Object.keys(obj).map((key)=>obj[key]).sort((a, b)=>b-a);
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        answer++;
        if(sum >= k) break;
    }
    return answer;
}