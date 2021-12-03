// 통과 - 꼭 다시 풀어볼 것!!
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let arr = input[1].split(' ').map(Number);
let result = new Array(n).fill(-1);
let stack = [];

for (let i=0; i<arr.length; i++) {
    while(stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
        result[stack.pop()] = arr[i];
    }
    stack.push(i);
}

console.log(result.join(' '));

// 시간 초과 💩
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').reverse().map(Number);
let answer = '';

while(input.length>1){
    let num = input.pop();
    for(let j=input.length-1; j>-1; j--){
        if(input[j] > num){
            answer += input[j] + ' ';
            break;
        }
        else if(j === 0 && input[j] <= num){
            answer += '-1' + ' ';
        }
    }
}
answer += '-1';
console.log(answer);