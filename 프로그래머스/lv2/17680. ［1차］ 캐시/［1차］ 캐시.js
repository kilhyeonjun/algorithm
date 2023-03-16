function solution(cacheSize, cities) {
    let answer = 0;
    const arr = [];
    cities.forEach((city)=>{
        let isHit = false;
        let i = 0;
        for(i; i < arr.length; i++){
            if(arr[i].toLowerCase() === city.toLowerCase()) {
                isHit = true;
                answer += 1;
                break;
            }
        }
        
        if(isHit) {
            arr.splice(i, 1);
        } else{
            answer += 5;
            if(arr.length === cacheSize) arr.shift();
        }
        if(cacheSize !== 0) arr.push(city);
    })
    return answer;
}