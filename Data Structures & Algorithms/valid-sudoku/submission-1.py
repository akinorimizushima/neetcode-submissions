class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        valid = True

        for row in board:
            rowSet = {}
            for val in row:
                if val == ".":
                    continue
                elif val in rowSet:
                    return False
                else:
                    rowSet[val] = True

        for i in range(9):
            columnSet = {}
            
            for j in range(9):
                val = board[j][i]
                if val == ".":
                    continue
                elif val in columnSet and val != ".":
                    return False
                else:
                    columnSet[val] = True

        # [0, 0] [0, 1] [0, 2] | [0, 3] [0, 4] [0, 5] | [0, 6] [2, 7] [2, 8]
        # [1, 0] [1, 1] [1, 2] | [1, 3] [1, 4] [1, 5] | [1, 6] [2, 7] [2, 8]
        # [2, 0] [2, 1] [2, 2] | [2, 3] [2, 4] [2, 5] | [2, 6] [2, 7] [2, 8]

        # [3, 0] [3, 1] [3, 2] | [3, 3] [0, 4] [0, 5] | [0, 6] [2, 7] [2, 8]
        # [4, 0] [4, 1] [4, 2] | [4, 3] [1, 4] [1, 5] | [1, 6] [2, 7] [2, 8]
        # [5, 0] [5, 1] [5, 2] | [5, 3] [2, 4] [2, 5] | [2, 6] [2, 7] [2, 8]


        for square in range(9):
            print("square", square)
            # start_row = (square // 3) * 3
            # start_col = (square % 3) * 3

            seen = {}

            for row in range(3):
                for col in range(3):
                    i = row + (square // 3) * 3
                    j = col + (square % 3) * 3
                    val = board[i][j]

                    if val == '.':
                        continue
                    elif val in seen:
                        return False
                    else:
                        seen[val] = True
        return valid