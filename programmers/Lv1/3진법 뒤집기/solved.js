// toString() 사용한 방법
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 30.3MB)
// 테스트 2 〉	통과 (0.04ms, 30.2MB)
// 테스트 3 〉	통과 (0.04ms, 30.3MB)
// 테스트 4 〉	통과 (0.04ms, 30.2MB)
// 테스트 5 〉	통과 (0.04ms, 30.3MB)
// 테스트 6 〉	통과 (0.04ms, 30.3MB)
// 테스트 7 〉	통과 (0.04ms, 30.2MB)
// 테스트 8 〉	통과 (0.05ms, 30.3MB)
// 테스트 9 〉	통과 (0.04ms, 30.3MB)
// 테스트 10 〉	통과 (0.04ms, 30.1MB)


function solution(n) {
    let answer = "";
    let result = 0;
    while(n>=3){
        answer += String(Math.floor(n%3));
        n /= 3;
    }
    answer += String(Math.floor(n));
    answer = answer.split("").map((a)=>Number(a));
    for(let i=answer.length-1, j=0; i>=0; i--, j++){
        result += answer[i]*(3**j);
    }
    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.14ms, 29.9MB)
// 테스트 2 〉	통과 (0.09ms, 30.2MB)
// 테스트 3 〉	통과 (0.08ms, 30.3MB)
// 테스트 4 〉	통과 (0.11ms, 30.4MB)
// 테스트 5 〉	통과 (0.08ms, 30.3MB)
// 테스트 6 〉	통과 (0.10ms, 30.1MB)
// 테스트 7 〉	통과 (0.11ms, 30.5MB)
// 테스트 8 〉	통과 (0.08ms, 29.9MB)
// 테스트 9 〉	통과 (0.09ms, 30.2MB)
// 테스트 10 〉	통과 (0.09ms, 30MB)