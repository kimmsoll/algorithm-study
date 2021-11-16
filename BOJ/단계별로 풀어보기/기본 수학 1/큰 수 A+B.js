const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let a = input[0];
let b = input[1];
let answer = '';

// 길이가 다를 수 있으므로 앞자리를 0으로 채워 두 수 길이를 맞춰준다
if(a.length !== b.length){
    let len = Math.max(a.length, b.length);
    if(a.length < len){
        a = a.padStart(len, '0');
    }
    if(b.length < len){
        b = b.padStart(len, '0');
    }
}

a = a.split('');
b = b.split('');
let s = 0;

// 길이가 1이 남을 때까지 string 으로 더해준다(아주 큰 수이므로!)
while(a.length>1){
    let curr_a = +a.pop();
    let curr_b = +b.pop();
    let sum = curr_a + curr_b + s;

    if(sum > 9){
        answer += String(sum%10);
        s = Math.floor(sum/10);
    }else{
        answer += String(sum);
        s = 0;
    }
}

// 맨 앞의 숫자는 따로 더해준다
let last = +a[0] + +b[0] +s;
answer = String(last) + answer.split('').reverse().join('');

console.log(answer);