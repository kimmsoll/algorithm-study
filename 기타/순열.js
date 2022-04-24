const getPermutations= function (arr, length) {
    const result = [];
    if (length === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)];
        const permutations = getPermutations(rest, length - 1);
        const attached = permutations.map((permutation) => [fixed, ...permutation]);
        result.push(...attached);
    });

    return result;
};
