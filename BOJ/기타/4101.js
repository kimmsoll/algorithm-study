const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(0, -1);

for (let i=0; i<input.length; i++) {
    let curr = input[i].split(' ').map(Number);
    if (curr[0] > curr[1]) {
        console.log('Yes');
    } else console.log('No');
}