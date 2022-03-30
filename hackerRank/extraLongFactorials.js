// *** 다시 풀기

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
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */
function extraLongFactorials(n) {
    let memoization = [BigInt(0), BigInt(1)];

    const factorial = num => (typeof memoization[num] !== 'number')
        ? ((num - BigInt(1)) > 0
            ? (num * factorial(num - BigInt(1)))
            : BigInt(1)
        )
        : memoization[num]

    console.log(String(factorial(BigInt(n))));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}
