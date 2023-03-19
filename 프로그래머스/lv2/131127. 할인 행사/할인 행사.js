function solution(want, number, discount) {
    let answer = 0;
    for(let i=0; i<discount.length; i++) {
        const obj = {};
        for(let j=0; j<10; j++) {
            if(!discount[i+j]) break;
            obj[discount[i+j]] = (obj[discount[i+j]]||0) + 1;
        }
        for(let k=0; k<want.length; k++) {
            if(obj[want[k]] !== number[k]) break;
            if(k === want.length-1) answer++;
        }
    }
    return answer;
}