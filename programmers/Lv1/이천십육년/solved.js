function solution(a, b) {
    const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let sum = 0;
    for(let i=0; i<a-1; i++){
        sum += Number(month[i]);
    }
    sum += b;
    const totalNum = (sum%7) -1 < 0? (sum%7) + 6 : (sum%7) -1;
    return day[totalNum];
}

// Date 객체 사용한 방법(조금 더 느리다)
function getDayName(a,b){
    const arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const date = new Date(`2016-${a}-${b}`);
    const day = date.getDay()
    return arr[day];
}
