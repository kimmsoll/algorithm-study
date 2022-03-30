'use strict';

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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let answer = '';
    let star = 1;
    let space = n - 1;
    while (star < n) {
        answer += `${' '.repeat(space)}${'#'.repeat(star)} \n`;
        space--;
        star++;
    }
    answer += '#'.repeat(star);
    console.log(answer);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
