function solution(n, words) {
    const obj = {};
    let prevWord = null;
    for(let i = 0; i < words.length; i++) {
        if(obj[words[i]] || (prevWord && prevWord[prevWord.length - 1] !== words[i][0])) {
            return [i % n + 1, Math.ceil((i + 1) / n)]
        }
        prevWord = words[i];
        obj[words[i]] = true;
    }
    return [0, 0];
}