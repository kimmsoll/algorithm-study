// 2월이 28일 까지였음을 문제에서 말해주고 있다
const fs = require('fs');
let [m, d] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

let months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

let sum = 0;
for (let i=0; i<m; i++) {
    sum += months[i];
}
sum += d;
console.log(days[sum%7]);