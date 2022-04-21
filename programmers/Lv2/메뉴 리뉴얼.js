function solution (orders, course) {
    let answer = [];
    let countArr = new Map();
    let maxCountArr = new Map();

    const getCombination = (arr, len) => {
        const result = [];
        if (num === 1) return arr.map((v) => [v]);
        else {
            arr.forEach((v, idx, arr) => {
                const fixed = v;
                const rest = arr.slice(idx+1);
                const combination = getCombination(rest, len-1);
                const attached = combination.map((v) => [fixed, ...v]);
                result.push(...attached);
            });
            return result;
        }
    }

    orders.some((order) => {
        order = order.split('').sort();
        for (let c of course) {
            const arr = getCombination(order, c);
            arr.forEach((v) => {
                v = v.join('').sort();
                if (countArr.has(v)) {
                    const cnt = countArr.get(v);
                    countArr.set(v, cnt + 1);
                    let maxCount = maxCountArr.get(v.length);
                    maxCount = Math.max(maxCount, cnt + 1);
                    maxCountArr.set(v.length, maxCount);
                } else {
                    countArr.set(v, 1);
                    if (!maxCountArr.has(v.length)) maxCountArr.set(v.length, 1);
                }
            });
        }
    });

    for (const [key, value] of countArr) {
        if (value >= 2 && value === maxCountArr.get(key.length)) {
            answer.push(key);
        }
    }

    return answer.sort();
}
