function solution(s) {
    const arr = s.split(' ');
    const answer = arr.map((word)=>{
        return word.split('').map((item, index)=>{
            if(index === 0) return item.toUpperCase();
            else return item.toLowerCase();
        }).join('')
    })
    return answer.join(' ');
}