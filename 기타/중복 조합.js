function getCombinationsRe(arr, length) {
    const result = [];
    if (length === 1) return arr.map((value) => [value]);
    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx);
        const combinations = getCombinationsRe(rest, length - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        result.push(...attached);
    });
    return result;
}
