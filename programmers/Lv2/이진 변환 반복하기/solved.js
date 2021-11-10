function solution(s) {
    let zero_cnt = 0;
    let change_cnt = 0;
    while(s !== '1'){
        let arr = '';
        for(let a of s){
            if(a === '0'){
                zero_cnt++;
                continue;
            }else{
                arr += a;
            }
        }
        s = (arr.length).toString(2);
        change_cnt++;
    }
    if(s === '1') return([change_cnt, zero_cnt]); 
}