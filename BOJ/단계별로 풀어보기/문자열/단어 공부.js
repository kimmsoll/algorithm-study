// 문자열 사이에 공백이 들어오는 경우를 없애줘야 한다

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().replace(/\s+/,'');
input = input.split('').map(v=>v.toUpperCase());
input.sort();

let answer = [];
let stack = [];

for(let a of input){
    if(stack[stack.length-1] !== a){
        if(stack.length>0){
            answer.push([stack[0], stack.length]);
        }
        stack = [];
    }
    stack.push(a);
}

answer.push([stack[0], stack.length]);

let cntArr = answer.map(v => +v[1]);
let max = Math.max(...cntArr);
let maxArr = answer.filter((v)=>+v[1]===max);

let result = maxArr.length>1 ? '?' : maxArr[0][0];
console.log(result);