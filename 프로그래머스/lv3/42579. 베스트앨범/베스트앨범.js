function solution(genres, plays) {
    let obj = {};
    genres.forEach((v, i) => {
        obj[v] = {
            plays: (obj[v]?.plays || 0) + plays[i],
            indexs:  [...(obj[v]?.indexs || []), i]
        }
    });
    
    return Object.keys(obj).sort((a, b) => obj[b].plays - obj[a].plays)
        .map(v => obj[v].indexs)
        .map(v => v.sort((a, b) => plays[b]-plays[a]).slice(0, 2)).flat();
}