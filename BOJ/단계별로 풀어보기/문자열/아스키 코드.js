const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

console.log(input.charCodeAt(0));

// charCodeAt(idx) 은 문자열 중 하나를 선택해 아스키코드로 변환
// String.fromCharCode 는 아스키코드 번호를 문자열로 변환