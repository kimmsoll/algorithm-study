// 출력을 여러번 하면 시간초과가 나므로, string 하나에 모두 넣은 후
// 한번에 출력해야 한다.

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
input.splice(0,1);
let answer = '';
input.forEach((v) => v.split(' ').reduce((prev,curr)=>answer+= +prev + +curr + '\n'));

console.log(answer);