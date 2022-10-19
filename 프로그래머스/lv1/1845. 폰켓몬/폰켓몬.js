function solution(nums) {
    let map = new Map();
    const max = nums.length / 2;
    for (num of nums) map.set(num, (map.get(num)||0)+1);
    return max < map.size ? max : map.size;
}