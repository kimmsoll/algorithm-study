const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
const len = +input[0];

for (let i=1; i<=len; i++) {
    let n = +input[i];
    const fibonacci = [[1,0], [0,1]];
    for (let j=2; j<=n; j++) {
        fibonacci[j] = [
            fibonacci[j-1][0] + fibonacci[j-2][0],
            fibonacci[j-1][1] + fibonacci[j-2][1]
        ];
    }
    console.log(fibonacci[n].join(' '));
}