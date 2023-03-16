function solution(str1, str2) {
    const a = [];
    const b = [];
    const arr = [];
    let aLen = 0;
    let bLen = 0;
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    for(let i=0; i<str1.length-1; i++) {
        if(/[a-zA-Z]/.test(str1[i]) && /[a-zA-Z]/.test(str1[i+1])){
            a.push(`${str1[i]}${str1[i+1]}`)
        }
    }
    aLen = a.length;
    for(let i=0; i<str2.length-1; i++) {
        if(/[a-zA-Z]/.test(str2[i]) && /[a-zA-Z]/.test(str2[i+1])){
            b.push(`${str2[i]}${str2[i+1]}`)
            // 교집합
            for(let j=0; j<a.length; j++){
                if(a[j]===b[b.length-1]) {
                    arr.push(a[j]);
                    a.splice(j, 1);
                    break;
                }
            }
        }
    }
    if(aLen === 0 && b.length === 0) return 65536;
    return Math.floor(arr.length / (aLen + b.length - arr.length) * 65536);
}