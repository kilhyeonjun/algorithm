function solution(record) {
    const nickname = {}
    const answer = [];
    record.forEach((item)=>{
        const temp = item.split(' ');    
        if(temp[0] !== 'Leave') {
            nickname[temp[1]] = temp[2];
            
        }
        if(temp[0] !== 'Change') {
            answer.push([temp[0], temp[1]]);
        }
    });
    return answer.map(([type, uid])=> `${nickname[uid]}님이 ${type === 'Enter' ? '들어왔습니다' : '나갔습니다' }.`);
}