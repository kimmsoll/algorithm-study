/* bfs
dfs 는 모든 경로를 다 탐색한 후에 비교하게 되지만,
bfs 의 경우 탐색 중간에 답을 찾으면 멈출 수 있기 때문에
최단 경로는 bfs 로 찾는 것이 좋다!
*/

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;

    // dx, dy 로 상하좌우 이동 배열을 미리 만들어 둠
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    // 이동 칸 수를 체크할 변수 생성(첫 칸은 무조건 방문)
    let answer = 1;
    // queue 만들어 [0,0] push
    let queue = [[0, 0]];
    maps[0][0] = 0;

    while (queue.length) {
        let size = queue.length;
        for (let i=0; i<size; i++) {
            // queue shift 해서 x, y
            let [x, y] = queue.shift();
            // 상하좌우 네 방향 nx, ny 에 dx, dy 더해서 확인
            for (let j=0; j<4; j++) {
                let nx = x + dx[j];
                let ny = y + dy[j];
                // 탐색 가능한 경우
                if (nx > -1 && ny > -1 && nx < n && ny < m && maps[nx][ny] === 1) {
                    if (nx === n-1 && ny === m-1) {
                        return ++answer;
                    }
                    // 목적지 도착이 아니라면 queue 에 넣음
                    queue.push([nx, ny]);
                    maps[nx][ny] = 0;
                }
            }
        }
        // 상하좌우 탐색 끝마칠 때마다 ++answer
        ++answer;
    }
    return -1;
}
