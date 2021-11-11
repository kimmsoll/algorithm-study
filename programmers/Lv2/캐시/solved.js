// cacheSize 가 0일 때 반례를 생각해줘야 하는 문제
// LRU 알고리즘 다시 공부하기

function solution(cacheSize, cities) {
    let cache = [];
    let time = 0;
    let arr = cities.map((c)=>c.split('').map((v) => {return v.toLowerCase()})).map(v => v.join(''));
    
    // cacheSize 가 0일 때
    if(cacheSize === 0){
        return arr.length * 5;
    }
    
    for(let city of arr){
        // hit - cache 메모리에 존재할 때
        if(cache.includes(city)){
            cache.splice(cache.indexOf(city), 1);
            cache.push(city);
            time += 1;
        }
        // miss - cache 메모리에 존재하지 않을 때
        else if(!cache.includes(city)){
            // cache가 비었을 때
            if(cache.length < cacheSize){
                cache.push(city);
            }
            // cache가 찼을 때
            else{
                cache.shift();
                cache.push(city);
            }
            time += 5;
        }
    }
    return time;
}