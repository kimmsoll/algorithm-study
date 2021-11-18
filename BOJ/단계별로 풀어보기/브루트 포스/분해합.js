const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

function findNum(n){
    // n이 한 자리 수일 경우를 체크해줘야 한다
    if(Math.floor(n/10) === 0) return n*2;
    let arr = String(n).split('').map(Number);
    let sum = arr.reduce((prev, curr)=>prev+curr);
    return +n + sum;
}

for(let i=1; i<=+input; i++){
    if(findNum(i) === +input){
        console.log(i);
        break;
    }
    if(i === +input){
        console.log(0);
    }
}
