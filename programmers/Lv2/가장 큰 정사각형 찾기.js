/*
참고 https://soobarkbar.tistory.com/164

무조건 1 또는 0이기 때문에,
1인 곳에서 왼쪽, 왼쪽 상단, 위쪽 모두 1일 경우
정사각형 한 변의 길이는 (왼쪽, 왼쪽 상단, 위쪽)의 최솟값 + 1 이다
이렇게 오른쪽 하단을 "정사각형 변의 길이"로 채워가다 보면,
가장 큰 정사각형의 길이를 찾을 수 있음
*/

function solution(board) {
    // [[0]] 같은 경우도 고려해줘야 함!
    if (board.length === 1) return board[0][0] === 1 ? 1 : 0;
    
    let max = 0;
    for (let i=1; i<board.length; i++) {
        for (let j=1; j<board[0].length; j++) {
            if (board[i][j] === 1) {
                let min = 1 + Math.min(board[i-1][j-1], board[i][j-1], board[i-1][j]);
                board[i][j] = min;
                max = Math.max(max, min);
            }
        }
    }
    return max * max;
}

