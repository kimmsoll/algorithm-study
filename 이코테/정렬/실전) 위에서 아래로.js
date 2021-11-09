let arr = [15, 27, 12];

function solution(arr){
    let answer = "";
    arr.sort((a,b)=>b-a);
    for(let v of arr){
        answer += `${v} `;
    }
    return answer.trimRight();
}