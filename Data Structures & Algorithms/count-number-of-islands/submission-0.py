class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        rows = len(grid)
        cols = len(grid[0])
        def dfs(r, c):
            if (r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == "0"):
                return
            grid[r][c] = "0"
            for dr, dc in directions:
                dfs(r + dr, c + dc)

        for i in range(len(grid)):
            row = grid[i]
            for j in range(len(grid[i])):
                cell = grid[i][j]
                if cell == "0":
                    continue;

                dfs(i, j)
                islands += 1        

        return islands
        