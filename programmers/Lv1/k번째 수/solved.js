function solution(array, commands) {
    let result = [];
    for(let a of commands){
        let arr = array.slice(a[0]-1, a[1]);
        arr.sort((a,b)=>a-b);
        result.push(arr[a[2]-1]);
    }
    return result;
}