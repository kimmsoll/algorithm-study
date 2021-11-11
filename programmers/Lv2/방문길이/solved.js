// 방문한 좌표가 (0,0)에서 (1,0)이라면, (1,0)에서 (0,0)을 방문한 경우도 방문 표시를 해줘야 한다.
function solution(dirs) {
    let directions = { U:[-1, 0], D:[1, 0], L:[0, -1], R:[0, 1] };
    let visited = new Set();
    let x = 0;
    let y = 0;
    for(let d of dirs){
        let nx = x + directions[d][0];
        let ny = y + directions[d][1];
        if(nx>5 || ny>5 || nx<-5 || ny<-5) continue;
        
        visited.add("" + x + y + nx + ny);
        visited.add("" + nx + ny + x + y);
        x = nx;
        y = ny;
    }
    return visited.size/2;
}