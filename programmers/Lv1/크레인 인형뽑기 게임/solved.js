function solution(board, moves) {
    let stack = [];
    let answer = 0;
    moves.forEach((move)=>{
        let y = move-1;
        for(let i=0; i<board.length; i++){
            if(board[i][y] === 0){
                continue;
            }else{
                if(board[i][y] === stack[stack.length-1]){
                    answer += 2;
                    stack.pop();
                    board[i][y] = 0;
                    break;
                }
                else{
                    stack.push(board[i][y]);
                    board[i][y] = 0;
                    break;
                }
            }
        }
    });
    return answer;
}

function solution(board, moves) {
    let newBoard = [...board];
    let stack = [];
    let answer = 0;
    moves.map((move) => {
        const y = move-1;
        let x = 0;
        while (x < board.length-1 && newBoard[x][y] === 0){
            x++;
        }
        if (newBoard[x][y] !== 0) {
            if (stack.length > 0 && stack[stack.length-1] === newBoard[x][y]) {
                stack.pop();
                answer += 2;
            } else {
                stack.push(newBoard[x][y]);
            }
            newBoard[x][y] = 0;
        }
    });
    
    return answer;
}