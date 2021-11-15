const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = +input[0];
let scores = input[1].split(' ');
let max = Math.max(...scores);

for(let i=0; i<n; i++){
    scores[i] = scores[i]/max*100;
}

let sum = scores.reduce((prev,curr)=>prev+curr);
console.log(sum/n);
