const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let arr = input.slice(1).map(Number);
arr.sort((a,b)=>a-b);

let avg = Math.round(arr.reduce((prev,curr)=>prev+curr)/n);
let mid = arr[Math.floor(arr.length/2)];
let range = arr[arr.length-1] - arr[0];

let obj = {};

for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]){
        obj[arr[i]]++;
    }else{
        obj[arr[i]] = 1;
    }
}

let cntArr = Object.entries(obj);
let often = Math.max(...Object.values(obj));
let oftenArr = cntArr.filter((v) => v[1] === often);
// Max 값이 두 개 이상일 경우 sort 해주는 게 포인트
often = oftenArr.length > 1 ? oftenArr.sort((a,b)=>a[0]-b[0])[1][0] : oftenArr[0][0];

console.log(avg);
console.log(mid);
console.log(often);
console.log(range);