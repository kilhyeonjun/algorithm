function solution(priorities, location) {
    let cnt = 0;
    while(priorities.length){
        let priority = priorities.shift();
        location--;
        if(priority === Math.max(...priorities, priority)){
            cnt++;
            if(location === -1) return cnt;
        } else {
            if(location === -1) location = priorities.length;
            priorities.push(priority);
        }
    }
}