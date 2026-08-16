class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        minute = 0
        rows = len(grid)
        cols = len(grid[0])
        queue = []
        fresh = 0
        directions = [(1, 0), (-1, 0), (0, -1), (0, 1)]

        for i in range(len(grid)):
            for j in range(0, len(grid[0])):
                if grid[i][j] == 2:
                    queue.append((i, j))
                elif grid[i][j] == 1:
                    fresh += 1
        while queue and fresh > 0:
            for _ in range(len(queue)):
                (row, col) = queue.pop(0)

                for (dr, dc) in directions:
                    nr, nc = row + dr, col + dc
                    if nr >= rows or nr < 0 or nc >= cols or nc < 0 or grid[nr][nc] != 1: 
                        continue
                    grid[nr][nc] = 2
                    fresh -= 1

                    queue.append((nr, nc))
                
            minute += 1

        if fresh > 0:
            return -1

        return minute
        