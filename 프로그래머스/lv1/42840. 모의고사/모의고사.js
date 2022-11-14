function solution(answers) {
    const obj = {
        '1' : {
            'patten' : [1, 2, 3, 4, 5],
            'count' : 0
        },
        '2' : {
            'patten' : [2, 1, 2, 3, 2, 4, 2, 5],
            'count' : 0
        },
        '3' : {
            'patten' : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
            'count' : 0
        }
    }
    let answer = [];
    let maxCount = 0;

    answers.forEach((v, i) => Object.keys(obj).forEach(key => v === obj[key].patten[i % obj[key].patten.length] && obj[key].count++));
    Object.keys(obj).map((key, i) => {
        if(maxCount === obj[key].count) answer.push(i+1);
        else if(maxCount < obj[key].count){
            maxCount = obj[key].count
            answer = [i+1];
        }
    });
    return answer;
}