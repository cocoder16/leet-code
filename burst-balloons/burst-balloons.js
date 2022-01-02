const maxCoins = nums => {
    const n = nums.length + 2;
    const adjustedNums = [1, ...nums, 1];
    const cache = Array.from(new Array(n), () => new Array(n).fill(null));
        
    const solve = (i, j) => {
        if (i > j) {
            return 0;
        }
        
        if (cache[i][j]) {
            return cache[i][j];
        }
        
        const middleNumberList = [...Array(j + 1 - i).keys()].map(e => e + i);

        cache[i][j] = Math.max(...middleNumberList.map(k => {
            return solve(i, k - 1) + solve(k + 1, j) + adjustedNums[i - 1] * adjustedNums[k] * adjustedNums[j + 1];
        }));
        
        return cache[i][j];
    };
    
    return solve(1, nums.length);
};