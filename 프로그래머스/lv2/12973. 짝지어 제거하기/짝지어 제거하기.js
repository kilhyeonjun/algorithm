function solution(s) {
    let stack = [];
    let temp = s.split('');
    for(let i = 0; i < temp.length; i++) {
        if(stack[stack.length - 1] === temp[i]) stack.pop();
        else stack.push(temp[i]);
    }
    return stack.length === 0 ? 1 : 0;
}