function solution(dirs) {
    let answer = 0;
    let x = 0, y = 0;
    const obj = {};
    dirs.split('').forEach((dir)=>{
        let newX = x, newY = y;
        if(dir === 'U') newY++;
        else if(dir === 'D') newY--;
        else if(dir === 'L') newX--;
        else newX++;
        
        if(newX < 6 && newX > -6 && newY < 6 && newY > -6) {
            if(!obj[`${x} ${y}`]) obj[`${x} ${y}`] = [];
            if(!obj[`${newX} ${newY}`]) obj[`${newX} ${newY}`] = [];
            if(!obj[`${x} ${y}`].find(item=>item.toString() === [newX, newY].toString())) {
                obj[`${x} ${y}`].push([newX, newY]);
                obj[`${newX} ${newY}`].push([x, y]);
                answer++;
            }
            [x, y] = [newX, newY];
        }
    })
    return answer;
}