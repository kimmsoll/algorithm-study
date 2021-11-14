const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let answer = '';
for(let i=1; i<=+input; i++){
    answer += i + '\n';
}
console.log(answer);
