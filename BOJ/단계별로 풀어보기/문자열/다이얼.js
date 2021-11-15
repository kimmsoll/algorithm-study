// input 에 앞뒤 공백이 있는 경우를 생각해줘야 함

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let time = 0;
const phone = [[],[],[],
['A','B','C'],['D','E','F'],['G','H','I'],
['J','K','L'],['M','N','O'],['P','Q','R','S'],
['T','U','V'],['W','X','Y','Z']];

for(let a of input){
    let arr = phone.filter(nums => nums.includes(a));
    time += phone.indexOf(...arr);
}

console.log(time);