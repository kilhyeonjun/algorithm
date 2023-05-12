function solution(maps) {
    const n = maps.length-1;
    const m = maps[0].length-1;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const queue = [[0, 0, 1]];
    while(queue.length !== 0) {
        const [x, y, count] = queue.shift();
        if(x===n && y===m) return count;
        for(const direction of directions) {
            const newX = x + direction[0];
            const newY = y + direction[1];
            if(newX > n || newX < 0 || newY > m || newY < 0) continue;
            if(!maps[newX][newY]) continue;
            maps[newX][newY] = 0;
            queue.push([newX, newY, count+1]);
        }
    }
    return -1;
}