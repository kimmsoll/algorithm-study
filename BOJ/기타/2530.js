const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let [h, m, s] = input[0].split(' ').map(Number);
let plusTime = input[1];

let hh;
let mm;
let ss;

if (Math.floor(plusTime/60/60) > 23) {
    hh = Math.floor(plusTime/60/60)%24;
} else {
    hh = Math.floor(plusTime/60/60);
}

plusTime -= hh*60*60;

mm = Math.floor(plusTime/60);

plusTime -= mm*60;

ss = plusTime;
if (s + ss > 59) {
  let temp = s + ss;
    s = temp % 60;
    m += Math.floor(temp / 60);
} else s += ss;

if (m + mm > 59) {
  let temp = m + mm;
    m = temp % 60;
    h += Math.floor(temp / 60);
} else m += mm;

if (h + hh > 23) {
  let temp = h + hh;
    h = temp % 24;
} else h += hh;

console.log(`${h} ${m} ${s}`);
