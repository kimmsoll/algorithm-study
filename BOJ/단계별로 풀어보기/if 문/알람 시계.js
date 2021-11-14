const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let h = +input[0];
let m = +input[1];
let time = 0;

if(h>0){
    time = h*60 + m -45;
    h = Math.floor(time/60);
    m = time%60;
} else if(h === 0){
    time = 60 + m - 45;
    h = Math.floor(time/60) === 0 ? 23 : Math.floor(time/60)-1;
    m = time%60;
}

console.log(`${h} ${m}`);
