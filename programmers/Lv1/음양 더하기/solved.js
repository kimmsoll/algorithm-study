function solution(absolutes, signs) {
    let result = 0;
    absolutes.map((a,idx) => {
        signs[idx] ? result += a : result -= a;
    });
    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 30.3MB)
// 테스트 2 〉	통과 (0.11ms, 30.4MB)
// 테스트 3 〉	통과 (0.13ms, 30.2MB)
// 테스트 4 〉	통과 (0.10ms, 30.2MB)
// 테스트 5 〉	통과 (0.11ms, 30.4MB)
// 테스트 6 〉	통과 (0.10ms, 30.1MB)
// 테스트 7 〉	통과 (0.11ms, 30.3MB)
// 테스트 8 〉	통과 (0.12ms, 30.2MB)
// 테스트 9 〉	통과 (0.10ms, 30.3MB)
