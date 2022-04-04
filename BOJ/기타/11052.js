// 동적 계획법으로 간단하게 해결
// 다시 풀어보기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let arr = input[1].split(' ').map(Number);
let dp = [0, ...arr];

for (let i=2; i<dp.length; i++) {
    for (let j=1; j<i; j++) {
        dp[i] = Math.max(dp[i], (dp[i-j] + dp[j]));
    }
}

console.log(dp[n]);