const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = +input[0];
let arr = input.slice(1,n+1);
let answer = [];

arr.forEach((str)=>{
    let newStr = str.split('X').join(' ');
    let score = 0;
    let cnt = 0;
    let i=1;
    for(let s of newStr){
        if(s === 'O'){
            cnt += i;
            i++;
        }else if(s === ' '){
            score += cnt;
            cnt = 0;
            i = 1;
        }
    }
    // X가 없는 문자열일 경우도 생각해야 한다
    score += cnt;
    answer.push(score);
})

for(let a of answer){
    console.log(a);
}