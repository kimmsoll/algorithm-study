const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = input[0] * 9;

for (let i=0; i<n; i+=9) {
    let y = 0;
    let k = 0;
    for (let j=0; j<9; j++) {
        let curr = input[i + 1 + j].split(' ').map(Number);
        y += curr[0];
        k += curr[1];
    }
    if (y > k) {
        console.log('Yonsei');
    } else if (y < k) {
        console.log('Korea');
    } else {
        console.log('Draw');
    }
}