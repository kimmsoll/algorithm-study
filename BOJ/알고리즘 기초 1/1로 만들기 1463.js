// 2부터 N까지 순서대로 각 숫자를 1로 만드는 최소 연산 횟수를 구하고 이를 저장
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let n = +input;
let memo = new Array(n+1);
memo[1] = 0;

for(let i=2; i<=n; i++){
    memo[i] = memo[i-1]+1;
    if(i%2 === 0) memo[i] = Math.min(memo[i], memo[i/2]+1);
    if(i%3 === 0) memo[i] = Math.min(memo[i], memo[i/3]+1);
}
console.log(memo[n]);