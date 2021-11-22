const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' '));
let len = input.length-1;

for(let i=0; i<len; i++){
    let testCase = input[i].map(Number).sort((a,b)=>a-b);
    if((Math.pow(testCase[0],2) + Math.pow(testCase[1],2)) === Math.pow(testCase[2],2)){
        console.log('right');
    }else console.log('wrong');
}