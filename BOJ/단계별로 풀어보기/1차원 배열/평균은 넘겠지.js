const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCaseNum = +input[0];

for(let i=1; i<=testCaseNum; i++){
    let testCase = input[i].split(' ').map(v=>+v);
    let n = testCase[0];
    let arr = testCase.slice(1);
    let avg = arr.reduce((prev,curr) => prev+curr) /n;
    let overAvg = arr.filter((v) => v > avg);
    // Math.round 는 반올림한 수와 가장 가까운 정수 값 반환
    // toFixed 는 고정 소수점 자릿수를 정함
    // toPrecision 은 Number 객체를 지정된 정밀도로 나타내는 문자열 반환(정밀도는 1~100까지의 숫자만 가능)
    let answer = (Math.round((overAvg.length/n*100)*1000)/1000).toFixed(3);
    console.log(`${answer}%`);
}