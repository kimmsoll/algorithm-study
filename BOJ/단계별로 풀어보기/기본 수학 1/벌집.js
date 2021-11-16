const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
let n = 1;
let cnt = 1;

while(n < +input){
    n += cnt * 6;
    cnt++;
}

console.log(cnt);