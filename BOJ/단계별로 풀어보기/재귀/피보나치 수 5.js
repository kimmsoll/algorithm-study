const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

function fivonacci(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fivonacci(n-1) + fivonacci(n-2);
}

console.log(fivonacci(+input));
