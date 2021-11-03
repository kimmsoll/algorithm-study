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