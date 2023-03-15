function solution(s) {
    let answer = 0;
    const obj = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    for(let i = 0; i < s.length; i++) {
        const stack = [0];
        for(let j = i; j < s.length + i; j++) {
            if(stack[stack.length - 1] === obj[s[j % s.length]]) stack.pop();
            else stack.push(s[j % s.length]);
        }
        if(stack.length === 1) answer++;
    }
    
    return answer;
}