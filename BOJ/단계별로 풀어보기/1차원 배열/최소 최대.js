const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let cnt = input[0];
    let arr = input[1].split(' ').map(Number);
    arr.sort((a,b)=>a-b);
    let min = arr[0];
    let max = arr[arr.length-1];
    console.log(`${min} ${max}`);

    process.exit();
});