// 시간 초과를 해결하기 위해서, stack 을 두 개로 나눠서 pop, push 로 풀이할 수 있다
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const stack_left = input[0].split('');
const stack_right = [];
const n = +input[1];

for(let j=2; j<n+2; j++){
    let [command, value] = input[j].split(' ');
    if(command === 'L' && stack_left.length>0){
        let popped = stack_left.pop();
        stack_right.push(popped);
    }
    if(command === 'D' && stack_right.length>0){
        let popped = stack_right.pop();
        stack_left.push(popped);
    }
    if(command === 'B' && stack_left.length>0){
        stack_left.pop();
    }
    if(command === 'P'){
        stack_left.push(value);
    }
}

let answer = stack_left.join('') + stack_right.reverse().join('');
console.log(answer);

// 시간 초과 코드 💩

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const stack = input[0].split('');
const n = +input[1];
let cursor = stack.length;

for(let j=2; j<n+2; j++){
    let command = input[j];
    if(command[0] === 'L' && cursor > 0){
        cursor--;
    }
    if(command[0] === 'D' && cursor < stack.length){
        cursor++;
    }
    if(command[0] === 'B' && cursor > 0){
        stack.splice(cursor-1,1);
        cursor--;
    }
    if(command[0] === 'P'){
        stack.splice(cursor, 0, command[2]);
        cursor++;
    }
}

console.log(stack.join(''));