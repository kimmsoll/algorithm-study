function solution(a, b) {
    let result = 0;
    for(let i=0; i<a.length; i++){
        result += a[i]*b[i];
    }
    return result;
}
// 정확성 테스트
// 테스트 1 〉	통과 (0.09ms, 30MB)
// 테스트 2 〉	통과 (0.05ms, 30.2MB)
// 테스트 3 〉	통과 (0.05ms, 30MB)
// 테스트 4 〉	통과 (0.04ms, 30.3MB)
// 테스트 5 〉	통과 (0.04ms, 30.2MB)
// 테스트 6 〉	통과 (0.07ms, 30.4MB)
// 테스트 7 〉	통과 (0.07ms, 29.9MB)
// 테스트 8 〉	통과 (0.08ms, 30.3MB)
// 테스트 9 〉	통과 (0.09ms, 30.3MB)


function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
// 정확성 테스트
// 테스트 1 〉	통과 (0.10ms, 30.5MB)
// 테스트 2 〉	통과 (0.07ms, 30MB)
// 테스트 3 〉	통과 (0.15ms, 30.1MB)
// 테스트 4 〉	통과 (0.09ms, 30.1MB)
// 테스트 5 〉	통과 (0.05ms, 30.1MB)
// 테스트 6 〉	통과 (0.08ms, 30.3MB)
// 테스트 7 〉	통과 (0.09ms, 30.2MB)
// 테스트 8 〉	통과 (0.10ms, 30.1MB)
// 테스트 9 〉	통과 (0.23ms, 30.3MB)
