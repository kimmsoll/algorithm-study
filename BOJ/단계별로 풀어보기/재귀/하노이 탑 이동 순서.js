// 원리 참고 글
// https://shoark7.github.io/programming/algorithm/tower-of-hanoi
// hanoi(N, start, to, via): start에서 to로 via를 거쳐 총 N개의 원반을 운반할 때 각 이동 과정을 출력

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let answer = '';
let cnt = 0;

function hanoi(n, start, to, via){
    if(n === 0) return;
    else{
        hanoi(n-1, start, via, to);
        answer += `${start} ${to}\n`;
        cnt++;
        hanoi(n-1, via, to, start);
    }
}

hanoi(+input, 1, 3, 2);
answer = cnt + '\n' + answer.slice(0,-1);
console.log(answer);
