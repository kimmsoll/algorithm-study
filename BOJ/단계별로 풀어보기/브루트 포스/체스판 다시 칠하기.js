const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let nm = input[0].split(' ').map(Number);
let n = +nm[0];
let m = +nm[1];
let board = input.slice(1);

let check = ['WBWBWBWB', 'BWBWBWBW'];
// n과 m의 최댓값이 50이므로, (50 * 50)보다 큰 값이 답이 될 수 없다
let answer = 2501;

// 전체 board를 (8 * 8)로 잘라가며 확인한다
for(let i=0; i<=n-8; i++){
    for(let j=0; j<=m-8; j++){
        // check 의 두 경우를 반복문으로 체크한다
        for(let k=0; k<2; k++){
            let cnt = 0;
            for(let x=0; x<8; x++){
                for(let y=0; y<8; y++){
                    let curr = board[i+x][j+y];
                    // 홀수 줄과 짝수 줄이 달라야 하므로, (x+k)를 2로 나눈 나머지로 비교
                    if(curr !== check[(x+k)%2][y]) cnt++;
                }
            }
            answer = Math.min(answer, cnt);
        }
    }
}

console.log(answer);