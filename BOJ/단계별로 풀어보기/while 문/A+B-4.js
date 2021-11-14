const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let i=0;

while(i < input.length){
    let nums = input[i].split(' ');
    let a = +nums[0];
    let b = +nums[1];
    console.log(a+b);
    i++;
}