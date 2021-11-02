function solution(record) {
    let arr = record.map((user)=>user.split(' '));
    let nicknameSet = {};
    let result = [];
    
    // enter, change 의 경우만 nickname 변경 유무를 확인한다.
    arr.filter((user)=>user.length === 3).forEach((user)=>{
        nicknameSet[user[1]] = user[2];
    });
    
    arr.forEach((user)=>{
        if(user[0] === "Enter"){
            result.push(`${nicknameSet[user[1]]}님이 들어왔습니다.`);
        }else if(user[0] === "Leave"){
            result.push(`${nicknameSet[user[1]]}님이 나갔습니다.`);
        }
    });
    
    return result;
}