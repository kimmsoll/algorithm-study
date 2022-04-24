function rotate(a) {
    let row = a.length;
    let column = a[0].length
    let result = Array.from(Array(row), () => new Array(column));
    
    for (let i=0; i<row; i++) {
        for (let j=0; j<column; j++) {
            result[j][row -i -1] = a[i][j];
        }
    }
}