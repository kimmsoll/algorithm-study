function solution(rows, columns, queries) {
    let graph = Array.from(Array(rows), () => new Array(columns).fill(0));
    const answer = [];

    for (let i=1; i<=rows; i++) {
        for (let j=1; j<=columns; j++) {
            // 행렬 값 채우기
            graph[i-1][j-1] = (i-1)*columns + j;
        }
    }
    
    for (let query of queries) {
        // queries 돌면서 min 값 구하기
        let min = rotate(query);
        answer.push(min);
    }
    
    function rotate(query) {
        let [x1, y1, x2, y2] = query;
        const findMinArr = [];
        // 인덱스값으로 구해야하므로 1씩 빼기
        x1--;
        y1--;
        x2--;
        y2--;
        /* 좌측 상단 값 저장(temp),
        빈 공간 하나를 위주로 자리를 한칸씩 옮긴 후,
        마지막으로 중복값에 저장된 값(temp)을 넣어주면 된다
        */
        const temp = graph[x1][y1];
        findMinArr.push(temp);
    
        // 왼쪽 테두리
        for(let r=x1; r<x2; r++) {
            graph[r][y1] = graph[r+1][y1];
            findMinArr.push(graph[r][y1]);
        }
        // 아래쪽 테두리
        for(let c=y1; c<y2; c++) {
            graph[x2][c] = graph[x2][c+1];
            findMinArr.push(graph[x2][c]);
        }
        // 오른쪽 테두리
        for(let r=x2; r>x1; r--) {
            graph[r][y2] = graph[r-1][y2];
            findMinArr.push(graph[r][y2]);
        }
        // 위쪽 테두리
        for(let c=y2; c>y1; c--) {
            graph[x1][c] = graph[x1][c-1];
            findMinArr.push(graph[x1][c]);
        }
    
        graph[x1][y1+1] = temp;
        return Math.min(...findMinArr);
    }

    return answer;
}