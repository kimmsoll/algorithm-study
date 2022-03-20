const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('.\n').slice(0, -1);
let answer = '';

for (let a of input) {
    let target = a.match(/\(|\)|\[|\]/g);
    let stack = [];
    if (target === null) answer += 'yes\n';
    else {
        for (let v of target) {
            if (v === '(') {
                stack.push(v);
            } else if (v === '[') {
                stack.push(v);
            } else if (v === ')') {
                if (stack[stack.length - 1] === '(') {
                    stack.pop();
                } else stack.push(v);
            } else if (v === ']') {
                if (stack[stack.length - 1] === '[') {
                    stack.pop();
                } else stack.push(v);
            }
        }
        if (stack.length > 0) answer += 'no\n';
        else answer += 'yes\n';
    }
}

console.log(answer);