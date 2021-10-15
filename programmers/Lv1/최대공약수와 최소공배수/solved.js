// 유클리드 호제법
// 2개의 자연수를 받아 최대공약수를 받기 위해 2부터 두 자연수 중 작은 자연수까지 모두 나누어보면서 가장 큰 공약수를 구할 수 있다.
// 최소공배수는 두 자연수의 곱 / 최대공약수
function solution(n, m) {
    let arr = [];
    let answer = [];
    const smallNum = n-m>0? m : n;
    for(let i=2 ; i<=smallNum; i++){
        if(n%i === 0 && m%i === 0){
            arr.push(i);
        }else{
            continue;
        }
    }
    if(arr.length<1){
        answer.push(1);
    }else{
        answer.push(arr[arr.length-1]);
    }
    answer.push((n*m)/answer[0]);
    return answer;
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.09ms, 30.2MB)
// 테스트 2 〉	통과 (0.08ms, 30.1MB)
// 테스트 3 〉	통과 (0.07ms, 30.4MB)
// 테스트 4 〉	통과 (0.06ms, 29.8MB)
// 테스트 5 〉	통과 (0.15ms, 30.3MB)
// 테스트 6 〉	통과 (0.05ms, 30.2MB)
// 테스트 7 〉	통과 (0.06ms, 29.9MB)
// 테스트 8 〉	통과 (0.08ms, 30.4MB)
// 테스트 9 〉	통과 (0.06ms, 29.7MB)
// 테스트 10 〉	통과 (0.05ms, 30.3MB)
// 테스트 11 〉	통과 (0.13ms, 30.2MB)
// 테스트 12 〉	통과 (0.21ms, 30.3MB)
// 테스트 13 〉	통과 (0.10ms, 30.5MB)
// 테스트 14 〉	통과 (0.16ms, 30.4MB)
// 테스트 15 〉	통과 (0.13ms, 30.1MB)
// 테스트 16 〉	통과 (0.10ms, 30.2MB)

