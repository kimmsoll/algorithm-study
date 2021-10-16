function solution(mission){
    const hor = ["1","2","3","4","5","6","7","8"];
    const ver = ["a","b","c","d","e","f","g","h"];
    const dx = [2,2,-2,-2,1,1,-1,-1];
    const dy = [1,-1,1,-1,2,-2,2,-2];
    let x = 0;
    let y = 0;
    let nx = 0;
    let ny = 0;
    let cnt = 0;
    x = hor.indexOf(mission[1]);
    y = ver.indexOf(mission[0]);
    for(let i=0; i<7; i++){
        nx = x + dx[i];
        ny = y + dy[i];
        if(nx < 0 || ny < 0 || nx > 7 || ny > 7){
            continue;
        }
        cnt++;
    }
    return cnt;
}
    
solution("a1");