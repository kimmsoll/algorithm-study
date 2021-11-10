let x = 26;

function solution(x){
    let d = Array(30001).fill(0);
    for(let i=2; i<x+1; i++){
        // 1을 뺐을 경우를 구함
        d[i] = d[i-1] +1;
        // 1을 뺐을 경우와 2로 나눴을 경우를 비교
        if(i%2 === 0){
            d[i] = Math.min(d[i], d[i/2] +1);
        }
        // 3으로 나눴을 경우와 직전을 비교
        if(i%3 === 0){
            d[i] = Math.min(d[i], d[i/3] +1);
        }
        // 5로 나눴을 경우와 직전을 비교
        if(i%5 === 0){
            d[i] = Math.min(d[i], d[i/5] +1);
        }
    }
    return d[x];
}

solution(x);