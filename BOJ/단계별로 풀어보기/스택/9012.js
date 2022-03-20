const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let answer = '';

for (let i=1; i<=n; i++) {
    let str = input[i].split('');
    let stack = [];
    for (let a of str) {
        if (a === '(') {
            stack.push(a);
        } else if (a === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                stack.push(a);
            }
        } else continue;
    }
    
    if (stack.length > 0) {
        answer += 'NO\n';
    } else answer += 'YES\n';
}

console.log(answer);