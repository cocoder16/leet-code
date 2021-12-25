class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = nums[0]
        current_sum = nums[0]
        new_sum = nums[0]
        
        for num in nums[1:]:
            current_sum += num
            if num <= 0:
                new_sum = num
            else:
                new_sum += num
            current_sum = max(current_sum, new_sum, num)
            max_sum = max(max_sum, current_sum)
            
        return max_sum