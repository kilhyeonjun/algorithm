function solution(N, number) {
    const MAX_VALUE = 8;
    const possibleValues = new Set();
    const currentSet = new Set();
    currentSet.add(0);
    possibleValues[0] = currentSet;
    for (let i = 1; i <= MAX_VALUE; i++) {
        const currentSet = new Set();
        currentSet.add(Number(`${N}`.repeat(i)));
        for(let j=1; j<i; j++){
           for(const value1 of possibleValues[j]){
               for(const value2 of possibleValues[i-j]){
                    const plus = value2 + value1;
                    if(plus > 0) currentSet.add(plus);
                    const minus = value2 - value1;
                    if(minus > 0) currentSet.add(minus);
                    const multiplication = value2 * value1;
                    if(multiplication > 0) currentSet.add(multiplication);
                    const division = Math.floor(value2 / value1);
                    if(division > 0) currentSet.add(division);
               }     
           } 
        }
        if (currentSet.has(number)) {
            return i;
        }
        possibleValues[i] = currentSet;
    }
    return -1;
}