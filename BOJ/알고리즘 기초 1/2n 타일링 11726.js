// i번째에 놓을 최대 수는 i-1과 i-2에 놓을 최대 수의 합
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let n = +input;

let cntArr = [0, 1, 2];

for(let i=3; i<=n; i++){
    cntArr[i] = (cntArr[i-2] + cntArr[i-1]) % 10007;
}

console.log(cntArr[n]);