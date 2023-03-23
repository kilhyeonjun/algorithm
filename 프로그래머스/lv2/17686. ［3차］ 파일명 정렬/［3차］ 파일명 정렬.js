function solution(files) {
    files.sort((a, b)=>{
        const matchA = a.match('[0-9]+');
        const headA = a.slice(0, matchA.index).toUpperCase();
        const numberA = +matchA[0];
        const matchB = b.match('[0-9]+');
        const headB = b.slice(0, matchB.index).toUpperCase();
        const numberB = +matchB[0];
        if(headA !== headB) return headB > headA ? -1 : 1;
        else return numberA - numberB;
    })
    return files;
}