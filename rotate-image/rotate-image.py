import copy

class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        new_matrix = copy.deepcopy(matrix)
        n = len(matrix)
        
        for i in range(0, n):
            for j in range(0, n):
                matrix[i][j] = new_matrix[n - 1 - j][i]
        