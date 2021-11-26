const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];

for(let i=1; i<=n; i++){
    let arr = input[i].split('');
    let stack = [];
    arr.forEach(v => {
        if(v === '('){
            stack.push(v);
        }else{
            if(stack[stack.length-1] === '('){
                stack.pop();
            }else{
                stack.push(v);
            }
        }
    });
    console.log(stack.length>=1 ? 'NO' : 'YES');
}