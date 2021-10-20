function solution(n, lost, reserve) {
    let answer = n - lost.length;
    lost.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);
    
    // 자기 여벌 있는 학생 제외
    for(let a of lost){
        if(reserve.includes(a)){
            answer += 1;
            reserve = reserve.filter((item) => item !== a);
            lost = lost.filter((item)=> item !== a);
        }
    }
    // 앞번호부터 제외
    for(let a of lost){
        if(a-1>0 && reserve.includes(a-1)){
            answer++;
            reserve = reserve.filter((item) => item !== a-1);
        }else if(a+1<=n && reserve.includes(a+1)){
            answer++;
            reserve = reserve.filter((item) => item !== a+1);
        }
    }
    return answer;
}