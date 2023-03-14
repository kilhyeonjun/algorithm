function solution(users, emoticons) {
    const answer = [0, 0];
    const discounts = [10, 20, 30, 40];

    const result = [];
    const dfs = (emoticons, array) => {
        if(emoticons.length === 0) {
            return result.push(array);
        }
        for(let i = 0; i < discounts.length; i++){
            dfs(emoticons.slice(1), [...array, [emoticons[0], discounts[i]]]);
        }
    }
    dfs(emoticons, []);
    
    result.forEach((item) => {
        let cnt = 0, total = 0;
        users.forEach((user)=>{
            let sum = 0;
            item.forEach(([price, discount])=>{
                if(user[0] <= discount) {
                    sum += price * (100 - discount) / 100;
                }
            })
            if(sum >= user[1]) cnt++;
            else total += sum;
        })
        if (answer[0] < cnt) {
            [answer[0], answer[1]] = [cnt, total];
        }
        if (answer[0] === cnt && answer[1] < total) {
            answer[1] = total;
        }
    })
    
    return answer;
}