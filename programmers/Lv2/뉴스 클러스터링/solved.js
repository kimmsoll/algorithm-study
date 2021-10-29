function solution(str1, str2) {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    let multi_arr1 = [];
    let multi_arr2 = [];
    
    for(let i=1; i<arr1.length; i++){
        multi_arr1.push(arr1[i-1] + arr1[i]);
    }
    for(let i=1; i<arr2.length; i++){
        multi_arr2.push(arr2[i-1] + arr2[i]);
    }

    multi_arr1 = multi_arr1.filter((a)=> {return !a.match(/[^A-Z]/gi)}).map((a)=>a.toUpperCase());
    multi_arr2 = multi_arr2.filter((a)=> {return !a.match(/[^A-Z]/gi)}).map((a)=>a.toUpperCase());
    
    let set = new Set([...multi_arr1, ...multi_arr2]);
    let union = multi_arr1.length + multi_arr2.length;
    let intersection = 0;

    set.forEach((a) => {
        let cnt1 = 0;
        let cnt2 = 0;
        for(let i=0; i<multi_arr1.length; i++){
            if(multi_arr1[i] === a){
                cnt1++;
            }
        }
        for(let i=0; i<multi_arr2.length; i++){
            if(multi_arr2[i] === a){
                cnt2++;
            }
        }
        intersection += Math.min(cnt1, cnt2);
        union -= Math.min(cnt1, cnt2);
    });
    
    // 합집합이  0일 경우 즉, 두 집합 모두 공집합일 경우 1을 리턴한다.
    if(union === 0){
        return 65536;
    }else{
        return Math.floor(intersection/union*65536);
    }
}