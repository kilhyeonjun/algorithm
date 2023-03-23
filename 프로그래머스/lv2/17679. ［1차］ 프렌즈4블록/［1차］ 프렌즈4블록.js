function solution(m, n, board) {
    board = board.sort((a,b)=>-1).map((item)=>item.split(''));
    let answer = 0;
    while(true) {
        const set = new Set();
        for(let j=0; j<m-1; j++) {
            for(let i=0; i<n-1; i++) {
                if(board[j][i] 
                   && board[j][i] === board[j][i+1] 
                   && board[j][i] === board[j+1][i]
                    && board[j][i] === board[j+1][i+1]) {
                    set.add(`${j},${i}`);
                    set.add(`${j},${i+1}`);
                    set.add(`${j+1},${i}`);
                    set.add(`${j+1},${i+1}`);
                }
            }
        }
        if(set.size === 0) break;
        
        for(let item of set) {
            const [x, y] = item.split(',');
            board[x][y] = null;
        }
        for(let j=0; j<m-1; j++) {
            for(let i=0; i<n; i++) {
                if(board[j][i]) continue;
                let k=j
                for(k; k<m-1;k++) if(board[k][i]) break;
                [board[j][i], board[k][i]] = [board[k][i], board[j][i]];
            }
        }
        answer += set.size;
    }
    return answer;
}