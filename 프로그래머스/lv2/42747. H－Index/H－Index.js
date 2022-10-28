function solution(citations) {
    citations.sort((a, b) => b - a);
    let max = citations[0];
    for(max; max >= 0; max--) if(max <= citations.filter(v => v >= max).length) return max;
}