function solution(today, terms, privacies) {
    const answer = []
    const termObj = {};
    terms.forEach((term)=>{
        const [key, day] = term.split(' ');
        termObj[key] = +day;
    })
    
    for(let i = 0; i < privacies.length; i++){
        const [startDay, key] = privacies[i].split(' ');
        let [year, month, day]= startDay.split('.').map((v)=>+v);
        day--;
        if(day === 0) {
            day = 28;
            month--;
        }
        if(month === 0) {
            month = 12;
            year--;
        }
        month += termObj[key];
        
        month--;
        year += Math.floor(month / 12);
        month = month % 12;
        month++;
        
        const [todayYear, todayMonth, todayDay]= today.split('.').map((v)=>+v);
        if(todayYear < year) {
            continue;
        }
        if(todayYear === year && todayMonth < month) {
            continue;
        }
        if(todayYear === year && todayMonth === month && todayDay <= day) {
            continue;
        }
        
        answer.push(i+1);
    }
    
    return answer;
}