const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();

for(let tc of input) {
    if (tc === tc.split('').reverse().join('')) {
        console.log('yes');
    } else console.log('no');
}
