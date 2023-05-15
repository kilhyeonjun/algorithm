function solution(word) {
    let answer = 0;
    const alphabets = ['', 'A', 'E', 'I', 'O', 'U'];
    const indexs = [0, 0, 0, 0, 0]
    const length = indexs.length;
    
    while(true) {
        if(length === 1) length = indexs.length;
        answer++;
        for(let i=0; i<length; i++){
            if(indexs[i] === 0 || i===length-1){
                indexs[i]++;
                break;
            }
        }
        
        for(let i=length-1; i>0; i--){
            if(indexs[i] > alphabets.length-1) {
                indexs[i] = 0;
                indexs[i-1]++;
            }
        }
        if(word === indexs.map(index=>alphabets[index]).join('')) return answer;
    }
    return answer;
}