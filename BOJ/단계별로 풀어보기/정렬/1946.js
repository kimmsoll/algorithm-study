// 성적 or 면접 순으로 정렬
// 성적으로 정렬했다고 가정할 때, 면접 순위가 앞 사원보다 높아야만 합격

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let t = +input.shift();

for (let i=0; i<t; i++) {
    let n = +input.shift();
    let arr = input.splice(0, n).map((v) => v.split(' ').map(Number));
    arr.sort((a, b) => a[0] - b[0]);
    let recruit = 1;
    
    for (let j=1; j<n; j++) {
        if (arr[j][1] < arr[j-1][1]) recruit++;
    }

    console.log(recruit);
}