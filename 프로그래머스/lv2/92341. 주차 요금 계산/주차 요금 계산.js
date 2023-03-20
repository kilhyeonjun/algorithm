function solution(fees, records) {
    const obj = {};
    records.forEach((record)=>{
        const arr = record.split(' ');
        if(!obj[arr[1]]) obj[arr[1]] = {inMiniute: [], outMiniute: [], sum: 0}
        const temp = arr[0].split(':');
        const miniute = +temp[0] * 60 + +temp[1];
        if(arr[2] === 'OUT') {
            obj[arr[1]].outMiniute.push(miniute);
        } else {
            obj[arr[1]].inMiniute.push(miniute);
        }
    });
    
    return Object.keys(obj).sort((a, b)=>a-b).map((key)=>{
        const totalMiniute = obj[key].inMiniute.map((inMiniute, index)=>{
            const outMiniute = obj[key].outMiniute[index] ? obj[key].outMiniute[index] : 23 * 60 + 59
            const diff = outMiniute - inMiniute;
            return diff;
        }).reduce((prev, v)=> prev+v,0);
        let fee = fees[1];
        if(totalMiniute > fees[0]){
            fee += Math.ceil((totalMiniute - fees[0]) / fees[2]) * fees[3];
        }
        return fee;
    });
}