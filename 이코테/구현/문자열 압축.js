function solution(s) {
    let answer = s.length;
    for(let step=1; step <= s.length/2; step++){
        let compressed = "";
        let pre = s.slice(0, step);
        let cnt = 1;
        for(let j=step; j<s.length; j+=step){
            if(pre === s.slice(j, j+step)){
                cnt++;
            }else{
                compressed += cnt>=2 ? String(cnt) + pre : pre;
                pre = s.slice(j, j+step);
                cnt = 1;
            }
        }
        compressed += cnt>=2 ? String(cnt) + pre : pre;
        answer = Math.min(answer, compressed.length);
    }
    return answer;
}