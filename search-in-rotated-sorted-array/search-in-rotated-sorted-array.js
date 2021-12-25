const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high) {
        const middle = Math.floor((high + low) / 2);
        const guess = arr[middle];
        
        if (guess === target) {
            return middle;
        } else if (guess > target) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }
    
    return -1;
};

const search = (nums, target) => {
    const maxIndex = nums.indexOf(Math.max(...nums));
    const targetIndex = nums.indexOf(target);
    
    if (targetIndex <= maxIndex) {
        return binarySearch(nums.slice(0, maxIndex + 1), target);
    } else if (targetIndex > maxIndex) {
        binarySearch(nums.slice(maxIndex + 1))
        return binarySearch(nums.slice(maxIndex + 1), target) + maxIndex + 1;
    }
    
    return -1;
};