// 11726번 문제와 같은 원리
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let n = +input;

let cntArr = [0, 1, 3];

for(let i=3; i<=n; i++){
    cntArr[i] = (2 * cntArr[i-2] + cntArr[i-1]) % 10007;
}

console.log(cntArr[n]);