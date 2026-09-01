class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (const row of board) {
            const seen = new Set()
            for (const cell of row) {
                if (cell === ".") {
                    continue;
                }
                if (seen.has(cell)) {
                    return false
                }
                seen.add(cell)
            }
        }

        for (let col = 0; col < 9; col++) {
            const seen = new Set()
            for (let row = 0; row < 9; row++) {
                const cell = board[row][col]
                if (cell === ".") {
                    continue;
                }
                if (seen.has(cell)) {
                    return false
                }
                seen.add(cell)
            }
        }
        // [row, col]
        // [0, 0]
        // [0, 1]
        // [0, 2]
        // [1, 0]
        // [1, 1]
        // [1, 2]
        // [2, 0]
        // [2, 1]
        // [2, 2]
        //
        // [3, 0]
        // [3, 1]
        // [3, 2]
        // [4, 0]
        // [4, 1]
        for (let square = 0; square < 9; square++) {
            const seen = new Set();

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const row = Math.floor(square / 3) * 3 + i
                    const col = (square % 3) * 3 + j
                    const cell = board[row][col]
                    if (cell === ".") {
                        continue;
                    }
                    if (seen.has(cell)) {
                        return false;
                    }

                    seen.add(cell)
                }
            }
        }



        return true
    }
}
