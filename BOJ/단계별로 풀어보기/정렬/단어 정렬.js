const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.slice(1);
let set = new Set(arr);
arr = Array.from(set);

arr.sort((a,b)=>{
    if(a.length !== b.length){
        return a.length - b.length;
    }else{
        // 길이가 같을 경우 사전순으로 비교
        for(let i=0; i<a.length; i++){
            if(a[i] !== b[i]){
                return a.charCodeAt(i) - b.charCodeAt(i);
            }else continue;
        }
    }
});

for(let v of arr){
    console.log(v);
}