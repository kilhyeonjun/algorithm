function solution(arr1, arr2) {
    let answer = [];
    for(let i=0; i<arr1.length; i++){
        answer.push([]);
        for(let j=0; j<arr1[i].length; j++) {
            for(let k=0; k<arr2[j].length; k++)
            answer[i][k] = (answer[i][k] || 0) + arr1[i][j] * arr2[j][k];
        }
    }
    return answer;
}