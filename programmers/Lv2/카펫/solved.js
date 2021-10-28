function solution(brown, yellow) {
    // 총 격자 개수가 카펫의 너비이다.
    let sum = brown + yellow;
    let h, w;
    // 갈색 격자 사이에 노란색 격자가 위치하므로, 최소 높이는 3이다.
    for(h=3; h<brown; h++){
        if(sum%h === 0){
            w = sum/h;
            // 테두리 1줄이 갈색이라 했으므로, 2씩 빼면 노란색 격자의 너비가 나와야 한다.
            if((h-2)*(w-2) === yellow){
                return [w, h];
            }
        }
    }
}