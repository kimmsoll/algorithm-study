// 변수 나열로 묶는 방법
function solution(numbers) {
    let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`)
    .join('');
    return answer[0] === '0' ? '0' : answer;
}
// 정확성  테스트
// 테스트 1 〉	통과 (122.04ms, 39.4MB)
// 테스트 2 〉	통과 (66.34ms, 37.1MB)
// 테스트 3 〉	통과 (162.64ms, 46MB)
// 테스트 4 〉	통과 (4.05ms, 32.5MB)
// 테스트 5 〉	통과 (109.50ms, 38.7MB)
// 테스트 6 〉	통과 (95.24ms, 38.4MB)
// 테스트 7 〉	통과 (0.07ms, 30.2MB)
// 테스트 8 〉	통과 (0.06ms, 30.3MB)
// 테스트 9 〉	통과 (0.06ms, 30.1MB)
// 테스트 10 〉	통과 (0.06ms, 30.3MB)
// 테스트 11 〉	통과 (0.07ms, 30.2MB)
// 테스트 12 〉	통과 (0.05ms, 30.2MB)


function solution(numbers) {
    const answer = numbers
        .sort((a, b) => {
            return (String(b) + String(a)) - (String(a) + String(b));
        })
        .join('');

    return answer[0] === '0' ? '0' : answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (162.95ms, 39.5MB)
// 테스트 2 〉	통과 (89.87ms, 37MB)
// 테스트 3 〉	통과 (212.89ms, 46.9MB)
// 테스트 4 〉	통과 (4.93ms, 33.2MB)
// 테스트 5 〉	통과 (139.66ms, 38.8MB)
// 테스트 6 〉	통과 (135.09ms, 39.1MB)
// 테스트 7 〉	통과 (0.13ms, 30MB)
// 테스트 8 〉	통과 (0.07ms, 30.2MB)
// 테스트 9 〉	통과 (0.11ms, 30MB)
// 테스트 10 〉	통과 (0.08ms, 30.3MB)
// 테스트 11 〉	통과 (0.08ms, 30MB)
// 테스트 12 〉	통과 (0.08ms, 30MB)