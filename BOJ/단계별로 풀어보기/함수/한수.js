const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

function findNum(n){
    let num = n;
    let answer = 99;
    if(num<=99) return num;
    if(num>99){
        while(num>99){
            let arr = String(num).split('').map(Number);
            for(let i=1; i<arr.length; i++){
                if(arr[i]-arr[i-1] !== arr[i+1]-arr[i]){
                    num--;
                    break;
                }
                answer++;
                num--;
            }
        }
        return answer;
    }
    }

console.log(findNum(+input));