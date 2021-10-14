function solution(n) {
    let result = 0;
    for(let i=1; i<=n; i++){
        if(n%i === 0){
            result += i;
        }
}
    return result;
}

// Math.sqrt 쓰는 방법
function solution(n) {
    var answer = 0;
    let i;
    for (i = 1; i <= Math.sqrt(n); i++){
        if (!(n%i)) {
            answer += (i+n/i);
        }
    }
    i--;
    return (i === n/i) ? answer-i : answer;
}