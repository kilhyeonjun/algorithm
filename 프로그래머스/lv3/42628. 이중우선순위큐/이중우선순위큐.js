function solution(operations) {
    let answer = [];
    operations.forEach((operation)=>{
        const opArr = operation.split(' ');
        if(opArr[0]==='I') {
            answer.push(+opArr[1]);
        }
        if(opArr[0]==='D') {
            if(opArr[1][0]==='-'){
                answer.shift();
            }else{
                answer.pop();
            }
        }
        answer.sort((a, b)=>a-b);
    })
    return answer.length === 0 ? [0, 0] : [answer[answer.length-1], answer[0]];
}