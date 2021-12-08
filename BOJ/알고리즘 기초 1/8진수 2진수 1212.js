// 통과 코드 
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    process.exit();
});

const main = (line) => {
    let input = line.split('');
    let answer = '';
    input.forEach((v, idx) => {
        let num = parseInt(v, 8).toString(2);
        while(idx !== 0 && num.length<3){
            num = '0' + num;
        }
        answer += num;
    });
    console.log(answer);
}


// 실패 코드 😱
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let answer = '';

for(let i=0; i<input.length; i++){
    let num = parseInt(input[i],8).toString(2);
    while(num.length<3){
        num = '0' + num;
    }
    answer += num;
}
console.log(+answer);