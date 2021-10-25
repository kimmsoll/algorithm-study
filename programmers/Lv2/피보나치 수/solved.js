// 자바스크립트가 정수 계산을 보장하는 범위 :
// console.log(Number.MAXSAFEINTEGER);

function f(m) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 1;
    for (let i = 3; i <= m; i++) {
        arr[i] = (arr[i-1]%1234567 + arr[i-2]%1234567);
    }
    return arr[m];
}

function solution(n) {
    let answer = f(n)%1234567;
    return answer;
}