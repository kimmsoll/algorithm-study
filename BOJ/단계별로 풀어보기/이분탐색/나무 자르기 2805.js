const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n= +input[0].split(' ')[0];
const size = +input[0].split(' ')[1];
const trees = input[1].split(' ').map(Number).sort((a, b) => a - b);

let start = 0;
let end = trees[n-1];
let result = 0;

while( start <= end ) {
    let sum = 0;
    const mid = Math.floor((start + end) / 2);
    for( let a of trees ) {
        if ( a > mid ) {
            sum += a - mid;
        }
    }
    if( sum < size) {
        end = mid - 1;
    } else {
        result = mid;
        start = mid + 1;
    }
}

console.log(result);
