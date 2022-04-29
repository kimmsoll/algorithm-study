const fs = require('fs');
let input = String(fs.readFileSync('dev/stdin')).split('');
let nums = new Array(10).fill(0);

for (let i=0; i<input.length; i++) {
    nums[input[i]]++;
}

let answer = [...nums.slice(0, 6), ...nums.slice(7,9)];
let sixAndNine = Math.ceil((nums[6] + nums[9])/2);
answer = Math.max(...answer, sixAndNine);

console.log(answer);