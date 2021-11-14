// fs 모듈로 풀면 오류가 난다.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    
    let x = Number(input[0]);
    let y = Number(input[1]);
    
    function findQuadrant(x,y){
        if(x>0 && y>0) return 1;
        if(x<0 && y>0) return 2;
        if(x<0 && y<0) return 3;
        if(x>0 && y<0) return 4;
    }
    console.log(findQuadrant(x,y));

    process.exit();
});




