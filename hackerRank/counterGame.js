// ** 비트 연산이 핵심!
// 1. 2진수 값들은 10, 100, 1000, 10000...으로 가장 앞자리는 1이고 2의 승수만큼 뒤에 0이 붙는다
// 2. 전달받은 값 n을 2진수로 바꾸고 그 길이를 구한 뒤 그 길이와 같은 2의 제곱 값을 따로 구한다
// 3. 두 값을 비교하여 동일하면 나누기 2를 해서 상대 턴으로 넘기고 차이가난다면 차이값을 상대턴으로 넘긴다
// 3. 턴을 넘기기 전 n이 1이라면 게임을 종료시킨다

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'counterGame' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts LONG_INTEGER n as parameter.
 */

// n 과 n-1 을 비트연산 했을 때, 0이 나온다면 2의 제곱 수다
function isPowerOf2(n){
    return (n&(n-1)) === 0;
}

function counterGame(n) {
    // Write your code here
    let winner = 1;

    while (n >= 1) {
        if (n === 1) {
            return winner % 2 !== 0 ? 'Richard' : 'Louise';
        }
        if (isPowerOf2(n)) {
            n /= 2;
        } else {
            let temp = Math.pow(2, Math.floor(Math.log2(n)));
            n -= temp;
        }
        winner++;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = counterGame(n);

        ws.write(result + '\n');
    }

    ws.end();
}
