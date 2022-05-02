function solution(relation) {
    const r = relation.length;
    const c = relation[0].length;
    let answer = 0;
    let indexList = [];
    let combs = [];
    
    const getCombinations = function (arr, length) {
        const result = [];
        if (length === 1) return arr.map((value) => [value]);
        arr.forEach((fixed, idx, origin) => {
            if (arr.length - idx < length) return;
            const rest = origin.slice(idx + 1);
            const combinations = getCombinations(rest, length - 1);
            const attached = combinations.map((combination) => [fixed, ...combination]);
            result.push(...attached);
        });
        // 인덱스 순서대로 정렬한다
        return result.sort((a, b) => a - b);
    }
    
    let idxArr = new Array(c).fill(0).map((_, idx) => idx);

    // 인덱스별 조합을 만들어 combs 배열에 넣는다
    for (let i=1; i<=c; i++) {
        combs.push(...getCombinations(idxArr, i));
    }

    let set = new Set();
    // combs 배열에서 하나의 인덱스로 생성되는 후보키를 찾는다
    combs.forEach((comb) => {
        set = new Set();
        if (comb.length === 1) {
            relation.map((tuple) => {
                set.add(tuple[comb[0]]);
            });
        }
        if (set.size === r) {
            indexList.push(...comb);
            answer++;
        }
    });

    // 후보키인 특정 인덱스는 더 이상 다른 후보키에 들어갈 수 없으므로, 빼준다
    combs = combs.filter((v) => v.length > 1).filter((v) => v.every((i) => !indexList.includes(i)));
    // 인덱스 리스트에서도 빼준다
    indexList = indexList.filter((v) => v.length > 1);
    
    while (combs.length) {
        set = new Set();
        let comb = combs.shift().join('');
        // 이미 나온 후보키의 모든 키가 들어있는 후보키는 다시 생성될 수 없으므로 체크한다
        if (indexList.every((v) => !v.split('').every((i) => comb.includes(i)))) {
            relation.map((tuple) => {
                let temp = '';
                comb.split('').forEach((i) => {
                    temp += tuple[i];
                });
                set.add(temp);
            });
            if (set.size === r) {
                indexList.push(comb);
                answer++;
            }
        }
    }

    return answer;
}
