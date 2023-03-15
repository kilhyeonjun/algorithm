function solution(arr) {
    let answer = arr.pop();
    let temp = answer;
    while(arr.length !== 0) {
        if(answer % temp === 0 && answer % arr[arr.length - 1] === 0){
            arr.pop();
            temp = answer;
        } else {
            answer++;
        }
    }
    return answer;
}