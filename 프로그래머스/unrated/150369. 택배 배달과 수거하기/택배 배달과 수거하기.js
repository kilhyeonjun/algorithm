function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    const caps = [cap, cap];
    for(let i = n-1; i > -1; i--) {
        let cnt = 0;
        caps[0] -= deliveries[i];
        caps[1] -= pickups[i];
        
        while(caps[0] < cap || caps[1] < cap) {
            caps[0] += cap;
            caps[1] += cap;
            cnt++;
        }
        answer += (i + 1) * cnt * 2
    }
    return answer;
}