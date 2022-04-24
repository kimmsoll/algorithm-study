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

    return result;
}
