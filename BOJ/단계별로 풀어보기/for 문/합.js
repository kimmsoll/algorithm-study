const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let answer = 0;

for(let i=1; i<=+input; i++){
    answer += i;
}

console.log(answer);
