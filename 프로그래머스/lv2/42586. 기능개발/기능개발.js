function solution(progresses, speeds) {
    const answer = [];
    const workDays= progresses.map((v, i) => Math.ceil((100-v) / speeds[i]));
    let temp = workDays[0], cnt = 1;
    for(let i = 1; i < workDays.length; i++){
        if(temp < workDays[i]) {
            temp = workDays[i];
            answer.push(cnt);
            cnt = 1;
        } else cnt++;
    }
    answer.push(cnt);
    return answer;
}