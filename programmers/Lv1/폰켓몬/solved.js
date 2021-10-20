function solution(nums) {
    let all_length = nums.length;
    let set = new Set(nums);
    let only_one_length = Array.from(set).length;
    return all_length/2 > only_one_length ? only_one_length : all_length/2;
}