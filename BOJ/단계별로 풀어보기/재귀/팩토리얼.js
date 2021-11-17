const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

function factorial(n){
    if(n === 0 || n === 1) return 1;
    return factorial(n-1) * n;
}

console.log(factorial(+input));