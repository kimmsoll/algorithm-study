// 수학적으로 접근하면 이항 정리 문제다
// ( (k+n)(k+n-1)(k+n-2)...(k+n-(n-1)) / n! )
// https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=freewheel3&logNo=220786117232

// k층 (n-1)호에 사는 사람 = (k-1)층 (1호부터 n-1호까지) 사는 사람의 수
// k층 (n)호에 사는 사람 = (k-1)층 (1호부터 n호까지) 사는 사람의 수
// 즉, k층 n호에 사는 사람 = k층 (n-1)호에 사는 사람 + (k-1)층 (n)호에 사는 사람

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testNum = +input[0];

for(let i=1; i<=testNum*2; i+=2){
    let arr = input.slice(i,i+2).map(Number);
    let k = arr[0];
    let n = arr[1];

    let result = 1;

    for(let j = 0; j < n-1; j++){
        result *= (k + n - j);
    }
    
    for(let j = 1; j < n; j++) {
        result /= j;
    }
    
    console.log(result);
}