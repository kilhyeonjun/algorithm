function solution(people, limit) {
    let answer = 0;
    people.sort((a, b)=> a - b);
    while(people.length !== 0) {
        const sum = people.pop();
        if(people[0] + sum <= limit) {
            people.shift();
        }
        answer++;
    }
    return answer;
}