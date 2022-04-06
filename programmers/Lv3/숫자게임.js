function solution(A, B) {
    // 순서가 중요하지 않으므로, sort 해도 상관 없다
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>a-b);

    let answer = 0;
    let i = 0;
    
    // i 값을 키워가며 비교하면, 이미 비교된 i는 제외 가능
    B.forEach((v)=>{
        if(A[i] < v){
            i++;
            answer++;
        }
    });
    return answer;
}