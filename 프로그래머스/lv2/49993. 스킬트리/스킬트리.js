function solution(skill, skill_trees) {
    let answer = 0;
    const arr = skill.split('');
    skill_trees.forEach((skill_tree)=>{
        let j=0;
        let isAble = true;
        for(let i=0; i<skill_tree.length; i++){
            if(arr[j] === skill_tree[i]) {
                j++;
                continue;
            }
            if(arr.slice(j).find((item) => item === skill_tree[i])){
              isAble = false;  
            }
        }
        if(isAble) answer++;
    })
    
    return answer;
}