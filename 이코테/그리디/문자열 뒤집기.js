function solution(n){
    let zero_cnt = 0;
    let one_cnt = 0;

    // 첫 번째 요소 확인
    if(n[0] === "1"){
        one_cnt++;
    } else {
        zero_cnt++;
    }
    // 두 번째 요소부터 확인
    for(let i=1; i<n.length-1; i++){
        if(n[i] !== n[0]){
            if (n[i] === "1") {
                one_cnt++;
            } else {
                zero_cnt++;
        }
    }}
    
    console.log(zero_cnt-one_cnt>0? one_cnt : zero_cnt);
};

solution("0001100");