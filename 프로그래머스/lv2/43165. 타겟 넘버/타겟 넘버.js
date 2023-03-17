function solution(numbers, target) {
    let answer = 0;
    const dfs = (numbers, sum) => {
        if(numbers.length === 0) {
            if(sum === target) answer++;
            return;
        }
        let sum1
        dfs([...numbers.slice(1)], sum + numbers[0]);
        dfs([...numbers.slice(1)], sum - numbers[0]);
    }
    dfs(numbers, 0);
    return answer;
}