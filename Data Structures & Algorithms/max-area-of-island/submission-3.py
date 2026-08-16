class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        maxArea = 0
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        def dfs(row, col):
            if (row < 0 or row == rows or
                col < 0 or col == cols or 
                not grid[row][col] or grid[row][col] == 0):
                return 0
            
            grid[row][col] = 0

            area = 1 + (dfs(row + 1, col) +
                dfs(row - 1, col) +
                dfs(row, col + 1) +
                dfs(row, col - 1))
            return area

        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == 1:
                    maxArea = max(maxArea, dfs(row, col))
        
        return maxArea