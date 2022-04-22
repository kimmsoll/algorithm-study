/* 3진법을 구한 후 변형을 통해 해결하면 간단하다
주어진 수를 3으로 게속 나누면서 나머지가 0이면 몫에서 1을 뺀다
나머지가 0이면 4, 1이면 1, 2이면 2로 대체하며 답을 도출한다 */

// 풀이 2
function solution(n) {
    let answer = '';
    while (n > 0) {
        if (n%3 === 0) {
            n = n/3 - 1;
            answer = '4' + answer;
        } else {
            answer = String(n%3) + answer;
            n = Math.floor(n/3);
        }
    }
    return answer;
}

// 풀이 1
function solution(n) {
    let arr = [4, 1, 2];
    let answer = '';
    while(n){
        answer = arr[n%3] + answer;
        n = n%3 === 0 ? (n/3)-1 : Math.floor(n/3);
    }
    return answer;
}