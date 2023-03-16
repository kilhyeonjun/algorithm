function solution(s) {
    const answer = new Set();
    const sArr = s.slice(2,s.length-2).split('},{')
    .map((item)=>item.split(',').map(v=>+v)).sort((a,b)=>a.length-b.length);
    
    for(arr of sArr) {
        for(item of arr) {
            answer.add(item);
        }
    }
    return [...answer]
}