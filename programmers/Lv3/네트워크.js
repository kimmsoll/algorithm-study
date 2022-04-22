function solution(n, computers) {
    // 컴퓨터 개수만큼 visited 배열을 만든다
    const visited = Array(n).fill(false);
    let answer = 0;
    
    /* 특정 컴퓨터 방문 후 모든 인덱스를 돌면서,
    방문 안 했고 1인 경우 그 컴퓨터를 방문하여 인덱스 돌기를 반복한다 */
    function dfs(i) {
        visited[i] = true;
        for (let j=0; j<n; j++) {
            if (!visited[j] && computers[i][j]) {
                dfs(j);
            }
        }
    }
    
    /* 방문 안됐을 경우, 컴퓨터를 방문한다
    연결된 모든 컴퓨터를 방문하므로,
    방문할 때마다 answer 개수를 늘리면 된다*/
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;   
        }
    }
    
    return answer;
}