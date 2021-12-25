const findMedianSortedArrays = (nums1, nums2) => {
    const sortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const size = sortedArray.length;
    
    if (size % 2 === 1) {
        return sortedArray[(size - 1) / 2];
    }
    
    return (sortedArray[size / 2] + sortedArray[size / 2 - 1]) / 2;
};