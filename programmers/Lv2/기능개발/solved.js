function solution(progress, speed) {
    // Math.ceil(n) 은 n보다 크거나 같은 정수 중 가장 작은 정수를 반환한다
    let arr = progress.map((v, idx) => Math.ceil((100-v)/speed[idx]));
    let max = arr[0];
    let result = [0];
    
    for(let i=0, j=0; i<arr.length; i++){
        if(arr[i] <= max){
            result[j] += 1;
        } else {
            max = arr[i];
            result[++j] = 1;
        }
    }
    return result;
}