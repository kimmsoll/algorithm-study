const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let n = 665;
let cnt = 0;

// cnt가 10000 이하이므로 전수조사를 해도 무리가 없다
while(cnt < +input){
    if(String(n).includes('666')){
        cnt++;
        if(cnt === +input) break;
    }
    n++;
}

console.log(n);