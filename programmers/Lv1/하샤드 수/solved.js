// idx 사용한 방법
function solution(x) {
    let num = String(x);
    let result = 0;
    for(let idx in num){
        result += Number(num[idx]);   
    }
    return Number(num) % result == 0? true: false;
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 30.3MB)
// 테스트 2 〉	통과 (0.05ms, 30.4MB)
// 테스트 3 〉	통과 (0.07ms, 30.2MB)
// 테스트 4 〉	통과 (0.07ms, 30.4MB)
// 테스트 5 〉	통과 (0.05ms, 30.4MB)
// 테스트 6 〉	통과 (0.11ms, 30.2MB)
// 테스트 7 〉	통과 (0.07ms, 30.3MB)
// 테스트 8 〉	통과 (0.06ms, 30.4MB)
// 테스트 9 〉	통과 (0.05ms, 30.2MB)
// 테스트 10 〉	통과 (0.09ms, 30.4MB)
// 테스트 11 〉	통과 (0.10ms, 30.2MB)
// 테스트 12 〉	통과 (0.05ms, 30.4MB)
// 테스트 13 〉	통과 (0.06ms, 30.2MB)
// 테스트 14 〉	통과 (0.06ms, 30.3MB)
// 테스트 15 〉	통과 (0.05ms, 30.3MB)
// 테스트 16 〉	통과 (0.06ms, 30.3MB)
// 테스트 17 〉	통과 (0.05ms, 30.2MB)

// reduce 사용한 방법
function solution(x) {
    const arr = String(x).split("");
    const sum = arr.reduce((pre, cur) => Number(pre)+Number(cur));
    if(x%sum === 0){
        return true;
    }else{
        return false;
    }
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 30.1MB)
// 테스트 2 〉	통과 (0.09ms, 30.4MB)
// 테스트 3 〉	통과 (0.05ms, 30.2MB)
// 테스트 4 〉	통과 (0.07ms, 30.2MB)
// 테스트 5 〉	통과 (0.08ms, 30.2MB)
// 테스트 6 〉	통과 (0.05ms, 30.1MB)
// 테스트 7 〉	통과 (0.08ms, 30.4MB)
// 테스트 8 〉	통과 (0.09ms, 30MB)
// 테스트 9 〉	통과 (0.08ms, 30.2MB)
// 테스트 10 〉	통과 (0.08ms, 30.3MB)
// 테스트 11 〉	통과 (0.11ms, 30.1MB)
// 테스트 12 〉	통과 (0.08ms, 30.1MB)
// 테스트 13 〉	통과 (0.08ms, 30.4MB)
// 테스트 14 〉	통과 (0.06ms, 30.1MB)
// 테스트 15 〉	통과 (0.09ms, 30.3MB)
// 테스트 16 〉	통과 (0.07ms, 30.2MB)
// 테스트 17 〉	통과 (0.05ms, 30.4MB)
