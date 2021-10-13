function solution(x, n) {
    let answer = [];
    for(let i=1; i<n+1; i++){
        answer.push(x*i)
    }
    return answer;
}

// 다른 풀이
function solution(x, n) {
    return Array(n).fill(x).map((cur, idx) => (idx + 1) * cur);
}