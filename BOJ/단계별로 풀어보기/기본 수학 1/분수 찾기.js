// 지그재그 움직임으로, 홀수와 짝수로 나눠 생각하는 게 포인트
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let sum = 1;
let n = 1;

while(sum < +input){
    n++;
    sum += n;
}

let a = +input - (sum-n);
let b = n+1 - a;

// n 이 홀수일 때, 3/1, 2/2, 1/3 의 순서로 분자가 내림차순 된다
let answer = n%2 !== 0 ? `${b}/${a}` : `${a}/${b}`;
console.log(answer);