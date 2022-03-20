const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];

let stack = [];
let result = '';

for (let i=1; i<=n; i++) {
    if (input[i].includes('push')) {
        let cmd = input[i].split(' ');
        stack.push(cmd[1]);
    } else if (input[i] === 'pop') {
        if (stack.length > 0) {
            result += `${stack.pop()}\n`;
        } else {
            result += '-1\n';
        }
    } else if (input[i] === 'size') {
        result += `${stack.length}\n`;
    } else if (input[i] === 'empty') {
        result += stack.length < 1 ? 1 : 0;
        result += '\n';
    } else if (input[i] === 'top') {
        if (stack.length < 1) {
            result += '-1\n';
        } else {
            result += `${stack[stack.length - 1]}\n`;
        }
    }
}

console.log(result);