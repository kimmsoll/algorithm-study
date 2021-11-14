const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let answer = '';
for(let i=+input; i>0; i--){
    answer += i + '\n';
}
console.log(answer);
