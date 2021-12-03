const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let stack = [];
let answer = 0;

for(let i=0; i<input.length; i++){
    if(input[i] === '('){
        stack.push(input[i]);
    }else{
        stack.pop();
        // 레이저일 경우 스택에 쌓인 '(' 개수만큼 더해준다
        if(input[i-1] === '('){
            answer += stack.length;
        }else{ // 쇠막대기 끝일 경우 1을 더해준다
            answer++;
        }
    }
}

console.log(answer);
