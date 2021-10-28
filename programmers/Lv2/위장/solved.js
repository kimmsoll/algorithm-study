function solution(clothes) {
    let obj = {};
    clothes.map((item) => obj[item[1]] ? obj[item[1]] += 1 : obj[item[1]] = 1);
    let arr = Object.values(obj);
    // 경우의 수
    // (a를 착용하는 경우의 수) * (b를 착용하는 경우의 수 - 1(착용하지 않는 경우)) -1(모두 착용하지 않는 경우)
    return arr.reduce((pre,cur)=>pre*(cur+1),1)-1;
}