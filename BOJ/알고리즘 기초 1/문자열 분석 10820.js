// input[i]값이 공백으로 들어오는 경우엔 처리하지 않아야 정답이 나온다

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const isLowerCase = /[a-z]/g;
const isUpperCase = /[A-Z]/g;
const isNumber = /[0-9]/g;
const isBlank = /\s/g;

for(let i=0; i<input.length; i++){
    let answer = '';
    let str = input[i];
    if(str === '') continue;
    answer += str.match(isLowerCase) ? str.match(isLowerCase).length + ' ' : '0 ';
    answer += str.match(isUpperCase) ? str.match(isUpperCase).length + ' ' : '0 ';
    answer += str.match(isNumber) ? str.match(isNumber).length + ' ' : '0 ';
    answer += str.match(isBlank) ? str.match(isBlank).length : '0';
    console.log(answer);
}