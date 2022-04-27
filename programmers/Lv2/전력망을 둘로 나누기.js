// 완전 탐색, bfs
function solution(n, wires) {
    let result = 100;
    let tree = Array.from(Array(n+1), () => new Array());
    
    for (let w of wires) {
        // 각 인덱스 별로 연결된 노드를 모두 담는다
        let [a, b] = w;
        tree[a].push(b);
        tree[b].push(a);
    }
    
    function search(node, exception) {
        let cnt = 0;
        let queue = [node];
        let visited = new Array(n+1).fill(false);
        visited[node] = true;
        
        while (queue.length) {
            let curr = queue.pop();
            // 현재 노드와 연결된 노드를 모두 탐색한다(bfs)
            tree[curr].map((v) => {
                if (v !== exception && !visited[v]) {
                    visited[v] = true;
                    // 연결된 노드를 queue에 담아, 방문하지 않은 노드가 없을 때까지 반복한다
                    queue.push(v);
                    cnt++;
                }  
            });
        }

        return cnt;
    }
    
    for(let w of wires) {
        let [a, b] = w;
        // 연결된 노드들의 개수 차이를 절댓값으로 구한다
        let dif = Math.abs(search(a, b) - search(b, a));
        result = dif < result ? dif : result;
    }
    
    return result;
}