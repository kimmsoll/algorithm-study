function solution(s){
    let answer = [];
    for(let a of s){
        if(a === '('){
            answer.push(a);
        }else{
            if(answer[answer.length-1] === '('){
                answer.pop();
            }else{
                answer.push(a);
            }
        }
    }
    return answer.length !== 0 ? false : true;
}