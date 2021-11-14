const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = +input;

function isLeapYear(year){
    if(year%4 === 0 && year%100 !== 0){
        return true;
    }else if(year%400 === 0){
        return true;
    }else return false;
}

let answer = isLeapYear(input) ? 1 : 0;
console.log(answer);