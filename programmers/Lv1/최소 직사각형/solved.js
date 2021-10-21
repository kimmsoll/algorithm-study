function solution(sizes) {
    sizes.map((card) => card.sort((a,b)=>a-b));
    let w_max = 0;
    let h_max = 0;
    for(let i=0; i<sizes.length; i++){
        w_max = Math.max(w_max, sizes[i][0]);
        h_max = Math.max(h_max, sizes[i][1]);
    }
    return w_max * h_max;
}