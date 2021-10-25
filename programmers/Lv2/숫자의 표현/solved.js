// 수학적 사고로 풀기 - 효율성이 훨씬 좋다
function solution(n) {
    let answer = 0;

  for(let i=1; i<=n; i++) {
      // n의 약수이면서 홀수인 것의 개수
    if (n%i == 0 && i%2 == 1)
      answer++
  }
    return answer;
}

// 효율성  테스트
// 테스트 1 〉	통과 (0.43ms, 29.8MB)
// 테스트 2 〉	통과 (0.25ms, 30.1MB)
// 테스트 3 〉	통과 (0.29ms, 29.9MB)
// 테스트 4 〉	통과 (0.33ms, 29.8MB)
// 테스트 5 〉	통과 (0.38ms, 30.1MB)
// 테스트 6 〉	통과 (0.37ms, 30MB)


function sum(start, n){
    let answer = 0;
    while(answer < n){
        answer += start;
        start++;
    }
    if(answer === n){
        return 1;
    }else return 0;
}

function solution(n) {
    let result = 0;
    for(let i=1; i<=Math.floor(n/2); i++){
        result += sum(i, n);
    }
    return result+1;
}

// 효율성  테스트
// 테스트 1 〉	통과 (2.57ms, 31.8MB)
// 테스트 2 〉	통과 (1.73ms, 31.6MB)
// 테스트 3 〉	통과 (2.71ms, 31.8MB)
// 테스트 4 〉	통과 (2.75ms, 31.7MB)
// 테스트 5 〉	통과 (2.12ms, 31.6MB)
// 테스트 6 〉	통과 (1.80ms, 31.8MB)
