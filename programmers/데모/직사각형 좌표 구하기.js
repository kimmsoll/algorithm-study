// 반복문 사용 풀이
function solution(v){
    for(let i=0; i<answer.length; i++){
        if(v[0][i] == v[1][i]){
            answer[i] = v[2][i];
        } else if(v[0][i] == v[2][i]){
            answer[i] = v[1][i];
        } else if(v[1][i] == v[2][i]){
            answer[i] = v[0][i];
        }
    }
}

// 논리 연산자 ^(XOR) 사용 풀이
// 세 값 중 두 개가 같고 나머지 하나가 다를 경우 그 다른 값을 반환
function solution(v){
    answer[0] = v[0][0] ^ v[1][0] ^ v[2][0];
    answer[1] = v[0][1] ^ v[1][1] ^ v[2][1];
    return answer;
}