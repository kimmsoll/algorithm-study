// 공백만 들어오는 경우도 체크해줘야 한다

const fs = require('fs');
// trim() 은 문자열 양끝의 공백 제거, 공백 여러개를 한꺼번에 제거함
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let answer = input[0] === '' ? 0 : input.length;
console.log(answer);