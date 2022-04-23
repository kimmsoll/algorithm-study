/* js sort() 는 [['aa', 'ca'], ['aa', 'ba']].sort() 일 경우
알아서 1. 첫번째 원소를 기준으로 정렬, 2. 두번째 원소를 기준으로 정렬 해준다
결과 -> [['aa', 'ba'], ['aa', 'ca']]
*/

// 꼭 다시 풀어볼 것

function solution(tickets) {
    tickets.sort();
    const ticketLength = tickets.length;
    const visited = new Array(ticketLength).fill(false);
    const result = [];
    
    function dfs(ticket, len) {
        result.push(ticket);
        if (len === ticketLength) return true;

        for (let i=0; i<ticketLength; i++) {
            if (!visited[i] && tickets[i][0] === ticket) {
                visited[i] = true;
                if(dfs(tickets[i][1], len+1)) return true;
                visited[i] = false;
            }
        }
        result.pop();
        return false;
    }

    dfs('ICN', 0);
    return result;
}