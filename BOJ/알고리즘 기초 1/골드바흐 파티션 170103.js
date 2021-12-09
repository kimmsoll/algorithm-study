// 시간초과가 나지 않으려면, 미리 소수를 구해둬야 한다
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let answer = [];
let primeArr = Array(1000001).fill(true).fill(false, 0, 2);

for(let i=2; i*i<=1000000; i++){
    if(primeArr[i]){
        for(let j=i*i; j<=1000000; j+=i){
            primeArr[j] = false;
        }
    }
}

for(let i=1; i<=n; i++){
    if(!input[i]) break;
    if(input[i]%2 !== 0) continue;
    let num = +input[i];
    let a = num/2;
    let b = num/2;
    let cnt = 0;
    while(a>1 && b<num){
        if(primeArr[a] && primeArr[b]){
            cnt++;
        }
        a -=1;
        b +=1;
    }
    answer.push(cnt);
}

console.log(answer.join('\n'));