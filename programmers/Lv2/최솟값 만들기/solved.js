function solution(arr1, arr2){
    let answer = 0;
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>b-a);
    for(let i=0; i<arr1.length; i++){
        answer += arr1[i] * arr2[i];
    }
    return answer;
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 30.3MB)
// 테스트 2 〉	통과 (0.10ms, 30.3MB)
// 테스트 3 〉	통과 (0.18ms, 30.2MB)
// 테스트 4 〉	통과 (0.11ms, 30MB)
// 테스트 5 〉	통과 (0.11ms, 30MB)
// 테스트 6 〉	통과 (0.12ms, 30.5MB)
// 테스트 7 〉	통과 (0.11ms, 30.3MB)
// 테스트 8 〉	통과 (0.11ms, 30.3MB)
// 테스트 9 〉	통과 (0.13ms, 30.4MB)
// 효율성  테스트
// 테스트 1 〉	통과 (0.95ms, 30.1MB)
// 테스트 2 〉	통과 (0.95ms, 30MB)
// 테스트 3 〉	통과 (0.91ms, 30.1MB)
// 테스트 4 〉	통과 (0.67ms, 30.1MB)

// reduce 로 풀기
function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 30.4MB)
// 테스트 2 〉	통과 (0.13ms, 30.3MB)
// 테스트 3 〉	통과 (0.10ms, 30.2MB)
// 테스트 4 〉	통과 (0.13ms, 30.3MB)
// 테스트 5 〉	통과 (0.11ms, 30.3MB)
// 테스트 6 〉	통과 (0.13ms, 30.3MB)
// 테스트 7 〉	통과 (0.11ms, 30.3MB)
// 테스트 8 〉	통과 (0.13ms, 30.2MB)
// 테스트 9 〉	통과 (0.14ms, 30.2MB)
// 효율성  테스트
// 테스트 1 〉	통과 (0.63ms, 30.1MB)
// 테스트 2 〉	통과 (0.97ms, 30.1MB)
// 테스트 3 〉	통과 (0.93ms, 29.9MB)
// 테스트 4 〉	통과 (0.96ms, 30MB)
