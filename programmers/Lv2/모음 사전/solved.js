// 중복 순열을 구해서 해당 단어를 찾으면 된다

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

function solution(word) {
    let dic = [];
    for(let i=1; i<6; i++){
        dic.push(...getPermutationsRe(['A','E','I','O','U'], i));
    }
    dic = dic.map((v) => v.join('')).sort();
    return dic.indexOf(word) + 1;
}