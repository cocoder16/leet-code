class Solution:
    def isUgly(self, n: int) -> bool:
        if n <= 0:
            return False
        
        n = abs(n)
        prime_factors = [2, 3, 5]
        
        for factor in prime_factors:
            while True:
                if n == 1:
                    return True

                if n % factor != 0:
                    break

                n //= factor

        if n == 1:
            return True
        else:
            return False