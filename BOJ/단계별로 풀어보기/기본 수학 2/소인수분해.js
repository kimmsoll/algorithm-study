const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let answer = '';

function getPrimeFactor(num){
    let i = 2;
    
    while(num !== 1){
        if(num%i === 0){
            num /= i;
            answer += i + '\n';
        }else i++;
    }

    if(answer.length>1){
        console.log(answer);
    }
}

getPrimeFactor(+input);