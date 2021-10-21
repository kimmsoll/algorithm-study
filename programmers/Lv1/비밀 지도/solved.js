function solution(n, arr1, arr2) {
    return arr1.map((val, idx) => addZero(n, (val | arr2[idx]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}
