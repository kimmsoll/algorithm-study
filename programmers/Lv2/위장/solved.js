// 풀이 2
function solution(clothes) {
    let answer = 1;
    const cntMap = new Map();
    clothes.map((c) => {
        const cloth = c[1];
        cntMap.has(cloth) ? cntMap.set(cloth, cntMap.get(cloth)+1) : cntMap.set(cloth, 1);
    });
    const mapSize = cntMap.size;
    if (mapSize === 1) return cntMap.values().next().value;
    
    // 각 종류 별 옷의 개수 + 1을 곱한다(안입는 경우도 존재하므로)
    for(let v of cntMap.values()){
        answer *= (v + 1);
    }
    
    // 결과 - 1을 한다(모두 다 안입는 경우는 제외하므로)
    return answer - 1;
}

// 풀이 1
function solution(clothes) {
    let obj = {};
    clothes.map((item) => obj[item[1]] ? obj[item[1]] += 1 : obj[item[1]] = 1);
    let arr = Object.values(obj);
    // 경우의 수
    // (a를 착용하는 경우의 수) * (b를 착용하는 경우의 수 - 1(착용하지 않는 경우)) -1(모두 착용하지 않는 경우)
    return arr.reduce((pre,cur)=>pre*(cur+1),1)-1;
}