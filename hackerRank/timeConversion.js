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
    const timeZone = s.slice(-2);
    let time = s.slice(0, -2).split(':');
    if (timeZone === 'PM' && +time[0] >= 1 && +time[0] <= 11) {
        time = `${12 + +time[0]}:${time[1]}:${time[2]}`;
        return time;
    } else if (timeZone === 'AM' && +time[0] === 12) {
        time = `00:${time[1]}:${time[2]}`;
        return time;
    }
    time = time.join(':');
    return time;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
