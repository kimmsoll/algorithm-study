function solution(numbers) {
    numbers.sort((a,b)=>a-b);
    let result = 0;
    for(let i=1; i<10; i++){
        if(numbers.includes(i)) continue;
        else result += i;
    }
    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 30.2MB)
// 테스트 2 〉	통과 (0.05ms, 30.3MB)
// 테스트 3 〉	통과 (0.09ms, 30.1MB)
// 테스트 4 〉	통과 (0.08ms, 30.2MB)
// 테스트 5 〉	통과 (0.12ms, 30.2MB)
// 테스트 6 〉	통과 (0.05ms, 30MB)
// 테스트 7 〉	통과 (0.05ms, 30.5MB)
// 테스트 8 〉	통과 (0.18ms, 30.2MB)
// 테스트 9 〉	통과 (0.08ms, 30.2MB)


// 총합 활용한 방법
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 30.3MB)
// 테스트 2 〉	통과 (0.04ms, 30.1MB)
// 테스트 3 〉	통과 (0.04ms, 30.2MB)
// 테스트 4 〉	통과 (0.06ms, 30.3MB)
// 테스트 5 〉	통과 (0.04ms, 30.2MB)
// 테스트 6 〉	통과 (0.09ms, 30.2MB)
// 테스트 7 〉	통과 (0.04ms, 30.3MB)
// 테스트 8 〉	통과 (0.04ms, 30.1MB)
// 테스트 9 〉	통과 (0.04ms, 29.9MB)