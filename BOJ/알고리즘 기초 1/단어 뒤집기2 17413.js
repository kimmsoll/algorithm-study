const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let answer = '';

const re = /(<.+?>|\s)/g;
input = input.split(re);

for(let v of input){
    // 정규식.test(문자열) -> 정규식 조건에 부합하면 true 반환
    if(re.test(v)){
        answer += v;
    }else{
        answer += v.split('').reverse().join('');
    }
}

console.log(answer);