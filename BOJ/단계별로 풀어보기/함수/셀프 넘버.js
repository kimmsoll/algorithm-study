let nums = [];
let n = 1;
let answer = '';

function d(n){
    let arr = String(n).split('').map(Number);
    let sum = arr.reduce((prev,curr)=>prev+curr);
    return n + sum;
}

while(n<=10000){
    nums.push(d(n));
    n++;
}

for(let i=1; i<10001; i++){
    if(nums.includes(i)) continue;
    else answer += i + '\n';
}

console.log(answer.slice(0,-1));
