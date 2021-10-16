const n = 5;

function solution(n){
    let answer = "";
    let cnt = 0;
    for(let i=0; i<=n; i++){
        for(let j=0; j<60; j++){
            for(let k=0; k<60; k++){
                answer = String(i)+String(j)+String(k);
                if(answer.includes("3")) cnt++;
        }
    }
    }
    return cnt;
}

solution(n);