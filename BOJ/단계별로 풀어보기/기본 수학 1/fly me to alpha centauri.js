// 규칙을 모를 땐 손으로 써보는 게 최고!
// 응용 가능한 수식 : 1+2+3+...+(n-1)+n+...+3+2+1 = n의 제곱
https://proofwiki.org/wiki/1%2B2%2B...%2Bn%2B(n-1)%2B...%2B1_%3D_n%5E2

// y-x	    가는 방법	          기계 작동 횟수
// 1	    1	                1(1+0)
// 2(1+1)	1 1	                2
// 3	    1 1 1	            3
// 4	    1 2 1	            3(2+1)
// 5	    1 2 1 1	            4
// 6(4+2)	1 2 2 1	            4
// 7	    1 2 2 1 1	        5
// 8	    1 2 2 2 1	        5
// 9	    1 2 3 2 1	        5(3+2)
// 10	    1 2 3 2 1 1	        6
// 11	    1 2 3 2 2 1	        6
// 12(9+3)	1 2 3 3 2 1	        6
// 13	    1 2 3 3 2 1 1	    7
// 14	    1 2 3 3 2 2 1	    7
// 15	    1 2 3 3 3 2 1	    7
// 16	    1 2 3 4 3 2 1	    7(4+3)

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = +input[0];

for(let i=1; i<=n; i++){
    let arr = input[i].split(' ').map(Number);
    let d = arr[1]-arr[0];
    let sqrt = Math.floor(Math.sqrt(d));
    let num = 0;
    if(Math.sqrt(d) === sqrt){
        num = (2 * sqrt) -1;
    }else{
        if(d <= (sqrt * sqrt + sqrt)){
            num = 2 * sqrt;
        }else if(d > (sqrt * sqrt + sqrt)){
            num = (2 * sqrt) +1;
        }
    }
    console.log(num);
}