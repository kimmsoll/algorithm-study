const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);


let nums = input[1].split(' ').map(Number).filter(v => v<m-2);
let max = 0;

for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
        for(let k=j+1; k<nums.length; k++){
            let sum = nums[i]+nums[j]+nums[k] > m ? 0 : nums[i]+nums[j]+nums[k];
            max = Math.max(max, sum);
        }
    }
}

console.log(max);