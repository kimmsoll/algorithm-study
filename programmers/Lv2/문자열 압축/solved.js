// substring 이용 풀이
function solution(s) {
    let answer = s.length;
    let max_len = Math.floor(s.length/2);
    for(let i=1; i<=max_len; i++){
        let cnt=1;
        let sub_str="";
        for(let j=0; j<s.length; j+=i){
            // substring 은 남은 idx를 길이에 상관 없이 리턴해준다
            const first = s.substring(j, j+i);
            const second = s.substring(j+i, j+i*2);
            if(first===second){
                cnt+=1;
            }else{
                if(cnt==1){
                    //숫자랑 문자열을 더하면 숫자가 문자로 변환
                    sub_str=sub_str+first; 
                }else{
                    sub_str=sub_str+cnt+first;
                    cnt=1;
                }
            }
        }
        answer = Math.min(answer, sub_str.length);
    }
    return answer;
}

// slice 이용 풀이
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
                compressed += cnt>=2 ? cnt + pre : pre;
                pre = s.slice(j, j+step);
                cnt = 1;
            }
        }
        compressed += cnt>=2 ? cnt + pre : pre;
        answer = Math.min(answer, compressed.length);
    }
    return answer;
}