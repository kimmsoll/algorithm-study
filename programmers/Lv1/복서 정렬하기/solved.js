function solution(weights, head2head) {
    const data = [];
    
    // 데이터 생성
    weights.map((w, i) => {
        let winningHeavier = 0;
        let winningCount = 0;
        let totalFightCount = 0;
        const log = head2head[i].split(''); 
        log.map((result, j) => { 
            // 대결한 적 없는 복서의 승률은 0% 이므로
            if(result !== 'N'){
                // 대결을 했다면 카운트
                totalFightCount++;
                // 이겼다면 카운트, 더 무거운 사람을 이겼다면 동시에 카운트
                if(result === 'W'){
                    if(weights[i] < weights[j]){
                        winningHeavier++;
                    }
                    winningCount++;
                }
            }
        });
        const winningRate = totalFightCount ? winningCount / totalFightCount : 0;
        data.push({ // 현재 선수의 데이터 생성하여 배열에 push
            idx: i,
            weight: w,
            winningHeavier,
            winningRate
        })
    });

    data.sort((a,b) => { // 데이터 정렬
        if(a.winningRate !== b.winningRate) { // 1. 전체 승률 내림차순
            return - (a.winningRate - b.winningRate);
        } else if (a.winningHeavier !== b.winningHeavier) { // 2. 무거운 사람을 이긴 수 내림차순
            return - (a.winningHeavier - b.winningHeavier);
        } else if (a.weight !== b.weight) { // 3. 자신의 무게 내림차순
            return - (a.weight - b.weight);
        } else { // 4. 인덱스 오름차순
            return a.idx - b.idx;
        }
    });
    
    return data.reduce((ans, d) => { // 각 인덱스 값을 +1 하여 반환
        ans.push(d.idx+1);
        return ans;
    }, []);
}