const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [];
let result = '';

for(let i=1; i<input.length; i++){
    if(input[i].includes('push')){
        arr.push(input[i].split(' ')[1]);
    }
    else if(input[i].includes('pop')){
        if(arr.length<1) result += -1 + '\n';
        else{
            let poped = arr.pop();
            result += poped + '\n';
        }
    }
    else if(input[i].includes('top')){
        let answer = arr.length < 1 ? -1 : arr[arr.length-1];
        result += answer + '\n';
    }
    else if(input[i].includes('size')){
        result += arr.length + '\n';
    }
    else if(input[i].includes('empty')){
        result += arr.length<1 ? 1 : 0;
        result += '\n';
    }
}

console.log(result);