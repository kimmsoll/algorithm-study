const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString());
let cnt = 1;
let sum = Math.floor(input/10) + input%10;
let n = 10*(input%10) + sum%10;

while(true){
    if(n === input) break;
    ++cnt;
    sum = Math.floor(n/10) + n%10;
    n = 10*(n%10) + sum%10;
}

console.log(cnt);