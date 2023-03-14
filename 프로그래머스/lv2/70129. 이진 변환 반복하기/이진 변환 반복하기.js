function solution(s) {
    const answer = [0, 0];
    while(s !== "1"){
        let prevLen = s.length;
        s = s.replaceAll('0', '')
        let len = s.length;
        s = len.toString(2);
        answer[0]++;
        answer[1] += prevLen - len;
    }
    
    return answer;
}