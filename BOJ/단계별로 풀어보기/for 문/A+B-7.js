const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let t = +input[0];

for(let i=0; i<t; i++){
    let nums = input[i+1].split(' ');
    console.log(`Case #${i+1}: ${+nums[0] + +nums[1]}`);
}
