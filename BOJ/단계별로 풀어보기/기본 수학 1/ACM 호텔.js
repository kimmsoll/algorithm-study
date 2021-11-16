const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testNum = +input[0];

for(let i=0; i<testNum; i++){
    let arr = input[i+1].split(' ');
    let h = +arr[0];
    let w = +arr[1];
    let n = +arr[2];

    // 높이가 n으로 나눠 떨어질 때만 고려해주면 되는 문제
    let new_h = (n%h) === 0 ? h : n%h;
    let new_w = Math.floor(n/h) === n/h ? n/h : Math.floor(n/h)+1;

    console.log(String(new_h)+String(new_w).padStart(2,'0'));
}