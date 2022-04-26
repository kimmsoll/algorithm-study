function getPermutationsRe(arr, length) {
    let result = [];
    let temp = [];
    function DFS(n) {
        if (n === length) {
            result.push([...temp]);
        } else {
            for (let i = 0; i < arr.length; i++) {
                temp[n] = arr[i];
                DFS(n + 1);
            }
        }
    }
    DFS(0);
    return result;
}
