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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let [hh, mm, ss] = s.slice(0, -2).split(':');
    let timeZone = s.slice(-2);
    if (timeZone === 'PM' && Number(hh) < 12) {
        hh = String(Number(hh) + 12).padStart(2, '0');
    }
    if (timeZone === 'AM' && Number(hh) === 12) {
        hh = '00';
    }
    return [hh, mm, ss].join(':');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
