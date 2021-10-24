function solution(n) {
    let cnt = n.toString(2).split('').filter((a)=>a==='1').length;
    let new_cnt = 0;
    let new_n = n;
    
    while(cnt !== new_cnt){
        new_n++;
        new_cnt = new_n.toString(2).split('').filter((a)=>a==='1').length;
    }
    if(cnt === new_cnt){
        return new_n;
    }
}