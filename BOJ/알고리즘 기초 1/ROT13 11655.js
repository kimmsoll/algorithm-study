const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('');
let answer = '';
const isUpperCase = /[A-Z]/g;
const isLowerCase = /[a-z]/g;

for(let i=0; i<input.length; i++){
    if(input[i].match(isUpperCase)){
        answer += String.fromCharCode((input[i].charCodeAt(0)-65+13)%26+65);
    }else if(input[i].match(isLowerCase)){
        answer += String.fromCharCode((input[i].charCodeAt(0)-97+13)%26+97);
    }else{
        answer += input[i];
    }
}

console.log(answer);