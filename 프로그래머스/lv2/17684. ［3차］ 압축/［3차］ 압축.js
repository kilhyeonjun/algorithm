function solution(msg) {
    const answer = [];
    const obj = {};
    for(let i=0; i<26; i++){
        obj[String.fromCharCode('A'.charCodeAt()+i)] = i+1;
    }
    for(let i=0; i<msg.length; i++) {
        let j=0;
        for(j; msg.length-j>i; j++) {
            const temp = msg.slice(i, msg.length-j);
            if (obj[temp]){
                answer.push(obj[temp]);
                break;
            }
        }
        obj[msg.slice(i, msg.length-j+1)] = Object.keys(obj).length + 1;
        i = msg.length-j-1;
    }
    return answer;
}