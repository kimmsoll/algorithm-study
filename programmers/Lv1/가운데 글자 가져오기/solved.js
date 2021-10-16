function solution(s) {
    const len = s.length;
    const arr = s.split("");
    let answer = "";
    if(len%2 === 0){
        answer += arr[len/2 -1] + arr[len/2];
    }else{
        answer += arr[Math.floor(len/2)];
    }
    return answer;
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 30.2MB)
// 테스트 2 〉	통과 (0.05ms, 30.3MB)
// 테스트 3 〉	통과 (0.06ms, 30.2MB)
// 테스트 4 〉	통과 (0.05ms, 30.3MB)
// 테스트 5 〉	통과 (0.12ms, 30.3MB)
// 테스트 6 〉	통과 (0.07ms, 30.1MB)
// 테스트 7 〉	통과 (0.05ms, 30MB)
// 테스트 8 〉	통과 (0.05ms, 29.7MB)
// 테스트 9 〉	통과 (0.06ms, 30.1MB)
// 테스트 10 〉	통과 (0.05ms, 30.3MB)
// 테스트 11 〉	통과 (0.09ms, 30.3MB)
// 테스트 12 〉	통과 (0.09ms, 30.3MB)
// 테스트 13 〉	통과 (0.08ms, 30.1MB)
// 테스트 14 〉	통과 (0.14ms, 30.4MB)
// 테스트 15 〉	통과 (0.05ms, 30.1MB)
// 테스트 16 〉	통과 (0.05ms, 30.4MB)