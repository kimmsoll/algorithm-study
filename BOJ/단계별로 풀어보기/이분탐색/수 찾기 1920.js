const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = +input[0];
const arr_n = input[1].split(' ').map(Number).sort((a, b) => a - b);
const arr_m = input[3].split(' ').map(Number);
const answer = [];

const binarySearch = (arr, target, start, end) => {
    if ( start > end ) {
        return;
    }
    const mid = Math.floor(( start + end ) / 2);
    if ( arr[mid] === target ) {
        return mid + 1;
    } else if ( arr[mid] > target ) {
        return binarySearch(arr, target, start, mid-1);
    } else {
        return binarySearch(arr, target, mid+1, end);
    }
};

arr_m.forEach((v) => {
    const result = binarySearch(arr_n, v, 0, n-1);
    if ( result ) {
        answer.push('1');
    } else {
        answer.push('0');
    }
});

console.log(answer.join('\n'));