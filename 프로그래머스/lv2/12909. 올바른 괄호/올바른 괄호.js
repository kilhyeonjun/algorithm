const solution = s => {
    if(s[0] !== '(') return false;
    let temp = 0;
    for(let i = 0; i < s.length; i++){
        if(temp === -1) return false
        temp += s[i] === '(' ? 1 : -1;
    }
    return temp === 0
}
