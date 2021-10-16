let x = 1;
let y = 1;
let cur_d = 0;

let cnt = 1; // 현재 좌표를 방문했기 때문에 0이 아니라 1

const map = [[1,1,1,1],[1,0,0,1],[1,1,0,1],[1,1,1,1]];
// 방문 기록을 위한 배열, 현재 좌표(x,y) 방문 처리함
let visited = [[0,0,0,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]];

// 왼쪽으로 회전
function turn_left(cur_d){
    cur_d -= 1;
    if(cur_d === -1){
    cur_d = 3;
    }
    return cur_d;
}

function solution(x, y, cur_d){
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let turn_time = 0;
    let nx = 0;
    let ny = 0;

    while(true){  
        // 왼쪽으로 회전
        cur_d = turn_left(cur_d);
        nx = x + dx[cur_d];
        ny = y + dy[cur_d];
        // 왼쪽으로 회전 후 정면에 가지 않은 칸이 존재하는 경우 이동
        if(map[nx][ny] === 0 && visited[nx][ny] === 0){
            visited[nx][ny] = 1;
            x = nx;
            y = ny;
            cnt++;
            turn_time = 0;
            continue;
        // 회전 후 정면에 가지 않은 칸이 없거나, 바다인 경우
        } else {
            turn_time += 1;
        }
        // 네 방향 모두 갈 곳이 없는 경우
        if(turn_time === 4){
            nx = x - dx[cur_d];
            ny = y - dy[cur_d];
            if(map[nx][ny] === 0){
                x = nx;
                y = ny;
            // 뒤가 바다인 경우
            } else {
                break;
            }
            turn_time = 0;
        }
    }
    console.log(cnt);
}

solution(x,y,cur_d);