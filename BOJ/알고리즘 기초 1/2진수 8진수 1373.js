/**
 * 핵심 : 세 자리수 2진수는 최대 7까지 나타낼 수 있다(000~111)
 * 2진수를 뒤에서부터 세 자리씩 끊어서 10진수로 변환하여 이어 붙이면 8진수가 된다
 * (ex 111000111(2진수) => 707(8진수))
 */
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let answer = [];
let n = input.length;

while(n >= 3){
    n -= 3;
    let arr = input.slice(n, n+3);
    answer.push(parseInt(arr.join(''), 2).toString(8));
}

if(n>0){
    answer.push(parseInt(input.slice(0,n).join(''), 2).toString(8));
}

console.log(answer.reverse().join(''));