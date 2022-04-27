/* 
0, 1 각각의 개수를 담는 total 을 생성
arr 크기가 1*1 이라면, total 에서 arr[0][0]의 값 개수를 1 증가시킨다
arr 총합이 0 또는 n*n 이라면, total 에서 arr[0][0]의 값 개수를 1 증가시킨다
그 외의 경우라면, arr 를 slice 하며 위 과정을 반복한다
*/

function solution(arr) {
    let total = [0, 0];
    
    function compress(arr, n) {
        let curr = arr[0][0];
        if (n === 1) {
            total[curr]++;
            return;
        }
        let sum = arr.map((v) => v.reduce((a, b) => a + b)).reduce((c, d) => c + d);
        if (sum === 0 || sum === n*n) {
            total[curr]++;
            return;
        }
        
        let div1 = arr.slice(0, n/2); // arr 의 앞 절반
        let div2 = arr.slice(n/2); // arr 의 뒤 절반
        let div1_1 = div1.map((v) => v.slice(0, n/2));
        let div1_2 = div1.map((v) => v.slice(n/2));
        let div2_1 = div2.map((v) => v.slice(0, n/2));
        let div2_2 = div2.map((v) => v.slice(n/2));
        
        compress(div1_1, n/2);
        compress(div1_2, n/2);
        compress(div2_1, n/2);
        compress(div2_2, n/2);
    }
    
    compress(arr, arr.length);
    return total;
}