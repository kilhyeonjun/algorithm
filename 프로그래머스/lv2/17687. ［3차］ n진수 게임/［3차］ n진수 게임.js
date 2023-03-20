function solution(n, t, m, p) {
    var answer = '';
    let i = 0;
    let count = 0;
    while(t > 0) {
        const str = i.toString(n);
        for(let j=0; j<str.length; j++) {
            if(count % m === p - 1) {
                answer += str[j].toUpperCase();
                t--;
                if(t === 0) break;
            }
            count++;
        }
        i++;
    }
    return answer;
}