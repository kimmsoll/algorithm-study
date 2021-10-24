// Math 로 풀기
function solution(s) {
    const arr = s.split(' ');
    return Math.min(...arr) + ' ' + Math.max(...arr);
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 30MB)
// 테스트 2 〉	통과 (0.06ms, 30.3MB)
// 테스트 3 〉	통과 (0.05ms, 30.2MB)
// 테스트 4 〉	통과 (0.09ms, 30.3MB)
// 테스트 5 〉	통과 (0.24ms, 30.4MB)
// 테스트 6 〉	통과 (0.08ms, 30.3MB)
// 테스트 7 〉	통과 (0.12ms, 30.3MB)
// 테스트 8 〉	통과 (0.05ms, 30.3MB)
// 테스트 9 〉	통과 (0.05ms, 30.2MB)

// sort 로 풀기
function solution(s) {
    let answer = '';
    let arr = s.split(' ');
    arr.sort((a,b)=>a-b);
    return answer += arr[0] + ' ' + arr[arr.length-1];
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 30.3MB)
// 테스트 2 〉	통과 (0.14ms, 30.4MB)
// 테스트 3 〉	통과 (0.06ms, 30.3MB)
// 테스트 4 〉	통과 (0.07ms, 30.2MB)
// 테스트 5 〉	통과 (0.13ms, 30MB)
// 테스트 6 〉	통과 (0.09ms, 30.3MB)
// 테스트 7 〉	통과 (0.07ms, 29.8MB)
// 테스트 8 〉	통과 (0.09ms, 30.3MB)
// 테스트 9 〉	통과 (0.07ms, 30.5MB)
