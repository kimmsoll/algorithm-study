/*
반복문을 수행하면서 문자 한개씩 아스키 코드값(''.charCodeAt(0))으로 변환하는데,
78(N) 보다 작은 알파벳이면 위쪽 방향으로 이동하는 게 더 빠르고,
78(N) 보다 크거나 같을 경우는 아래쪽 방향으로 이동하는 게 더 빠르므로,
Z(90)의 다음값인 91에서 해당 값을 뺀 값으로 설정하면 된다.
*/

function solution(name) {
    // 총 이동 값을 담는 변수
    let answer = 0;
    let totalLength = name.length;
    let min = totalLength - 1;

    for (let i=0; i<totalLength; i++) {
        let temp = name.charCodeAt(i);
        if (temp < 78) {
            answer += temp % 65;
        } else {
            answer += 91 - temp;
        }
        // 좌우 이동 값을 담는 변수
        let nextIdx = i+1;
        while (nextIdx < totalLength && name[nextIdx] === 'A') {
            nextIdx += 1;
        }
        // 전체 이동 거리의 최솟값을 구해야하므로, 지금껏 이동한 거리도 함께 계산한다
        // i*2 는 현재 인덱스만큼 온 거리 + 다시 첫번째 인덱스로 돌아가는 거리이다
        min = Math.min(min, (i*2) + totalLength - nextIdx);
        // 처음부터 거꾸로 돌아가는 경우도 고려해줘야 한다
        min = Math.min(min, (totalLength - nextIdx)*2 + i);
    }

    answer += min;
    return answer;
}
