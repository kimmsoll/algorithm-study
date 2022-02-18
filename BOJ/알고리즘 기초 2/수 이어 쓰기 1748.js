const fs = require('fs');
let n = fs.readFileSync('/dev/stdin').toString().trim();
let answer = 0;
let maxLength = 9;

answer += n.length * (+n - Math.pow(10, n.length-1) +1);

if(n.length>1){
    for(let i=1; i<n.length; i++){
        answer += maxLength * i * Math.pow(10, i-1);
    }
}

console.log(answer);


// if(n<10){
//     answer = n;
// } else if(10<=n && n<100){
//     answer = 9 + 2*(n-9);
// } else if(100<=n && n<1000){
//     answer = 9 + 2*90 + 3*(n-99);
// } else if(1000<=n && n<10000){
//     answer = 9 + 2*90 + 3*900 + 4*(n-999);
// } else if(10000<=n && n<100000){
//     answer = 9 + 2*90 + 3*900 + 4*90000 + 5*(n-9999);
// } else if(100000<=n && n<1000000){
//     answer = 9 + 2*90 + 3*900 + 4*90000 + 5*900000 + 6*(n-99999);
// } else if(1000000<=n && n<10000000){
//     answer = 9 + 2*90 + 3*900 + 4*90000 + 5*900000 + 6*9000000 + 7*(n-999999);
// } else if(10000000<=n && n<100000000){
//     answer = 9 + 2*90 + 3*900 + 4*90000 + 5*900000 + 6*9000000 + 7*90000000 + 8*(n-9999999);
// } else answer = 9 + 2*90 + 3*999 + 4*90000 + 5*900000 + 6*9000000 + 7*90000000 + 8*90000000 + 9;