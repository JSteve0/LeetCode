function twoSum(nums: number[], target: number): number[] {
    const hash = [];
    for (let i = 0; i < nums.length; i++) {
        const neededNum = target - nums[i];
        if (hash[neededNum] !== undefined) {
            return [hash[neededNum], i];
        }

        hash[nums[i]] = i;
    }
}