const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let a = String(input[0]);
let b = String(input[2]);
const isMultiply = input[1] === '*';

function calculate(a, b) {
    if (a.length === b.length) {
        if (isMultiply) {
            return '1' + '0'.repeat(a.length - 1) + '0'.repeat(a.length - 1);
        } else {
            return '2' + '0'.repeat(a.length - 1);
        }
    } else {
        if (isMultiply) {
            return '1' + '0'.repeat(a.length - 1) + '0'.repeat(b.length - 1);
        } else {
            if (a.length > b.length) {
                a = a.split('');
                a[a.length - b.length] = '1';
                return a.join('');
            } else {
                b = b.split('');
                b[b.length - a.length] = '1';
                return b.join('');
            }
        }
    }
}

console.log(calculate(a, b));