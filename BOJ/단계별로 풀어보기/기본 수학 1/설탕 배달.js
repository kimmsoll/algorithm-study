const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let n = +input;
let cnt = 0;

while(n>0){
    if(n%5 !== 0){
        n -= 3;
        cnt++;
    }else if(n%5 === 0){
        cnt += n/5;
        n %= 5;
        break;
    }
}

let answer = n === 0 ? cnt : -1;
console.log(answer);