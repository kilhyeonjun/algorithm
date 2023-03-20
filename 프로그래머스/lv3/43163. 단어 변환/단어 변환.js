function solution(begin, target, words) {
    const isChange = (a, b) => {
        const obj = {};
        for(let i=0; i<a.length; i++) {
            obj[a[i]] = (obj[a[i]] || 0) + 1;
        }
        for(let i=0; i<b.length; i++) {
            obj[b[i]] = (obj[b[i]] || 0) - 1;
        }
        const arr = [0, 0];
        Object.values(obj).forEach((value)=>{
            let index = 0;
            if(value < 0) index = 1;
            arr[index] += value;
        }) 
        return arr[0] === 1 && arr[0] === 1 ? true : false;
    }
    const arr = [];
    const dfs = (begin, words, count) => {
        if(begin === target) {
            return arr.push(count);
        }
        for(let i=0; i<words.length; i++) {
            if(!isChange(begin, words[i])){
                continue;
            }
            dfs(words[i], [...words.slice(0, i), ...words.slice(i + 1)], count + 1);
        }
    }
    dfs(begin, words, 0);
    return arr.length === 0 ? 0 : Math.min(...arr);
}