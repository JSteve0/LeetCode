function firstMissingPositive(nums: number[]): number {
    const found = [];
    nums.forEach((num) => found[num] = true);

    for (let i = 1; i < 200000000; i++) {
        if (found[i] === undefined) return i;
    }
}