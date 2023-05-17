function solution(tickets) {
    let answer = [];
    const result = [];
    const visited = [];
    const len = tickets.length;
    tickets.sort();
    
    const dfs = (to, count) => {
        result.push(to);
        if(len === count) return true;
        
        for(let i=0; i<tickets.length; i++) {
            if(!visited[i] && tickets[i][0] === to) {
                visited[i] = true;
                if(dfs(tickets[i][1], count+1)) return true;
                visited[i] = false;
            }
        }
        result.pop();
        return false;
    }
    
    dfs('ICN', 0);
    return result;
}