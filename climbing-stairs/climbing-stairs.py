class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2
        
        a = 1
        b = 2
        c = 0
        
        for i in range(3, n):
            c = a + b
            a = b
            b = c
            
        return a + b;