function solution(places) {
    let answer = [];
    let isBound = (v) => v >= 0 && v < 5;
    for (const place of places) {
        place.map((row, idx) => {
            place[idx] = row.split('')});
        const isPerson = (r, c) => place[r][c] === 'P';
        const isEmpty = (r, c) => place[r][c] === 'O';
        const keepRight = place.every((row, r) =>
            row.every((seat, c) => {
                if (seat === 'P') {
                    if (isBound(r-1)) {
                        if (isPerson(r-1, c)) return false;
                        if (isEmpty(r-1, c)) {
                            if (isBound(r-2) && isPerson(r-2, c)) return false;
                            if (isBound(c-1) && isPerson(r-1, c-1)) return false;
                            if (isBound(c+1) && isPerson(r-1, c+1)) return false;
                        }
                    }
                    if (isBound(r+1)) {
                        if (isPerson(r+1, c)) return false;
                        if (isEmpty(r+1, c)) {
                            if (isBound(r+2) && isPerson(r+2, c)) return false;
                            if (isBound(c-1) && isPerson(r+1, c-1)) return false;
                            if (isBound(c+1) && isPerson(r+1, c+1)) return false;
                        }
                    }
                    if (isBound(c-1)) {
                        if (isPerson(r, c-1)) return false;
                        if (isEmpty(r, c-1) && isBound(c-2) && isPerson(r, c-2)) return false;
                    }
                    if (isBound(c+1)) {
                        if (isPerson(r, c+1)) return false;
                        if (isEmpty(r, c+1) && isBound(c+2) && isPerson(r, c+2)) return false;
                    }
                }
                return true;
            })
        );
        answer.push(keepRight ? 1 : 0);
    }
    return answer;
}