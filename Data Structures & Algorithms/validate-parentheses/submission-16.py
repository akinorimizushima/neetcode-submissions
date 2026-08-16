class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        m = {
            "]": "[",
            ")": "(",
            "}": "{",
        }

        # stack: []
        # c: "("
        # stack: [(]
        # c: "["

        for c in s:
            if not c in m:
                stack.append(c)
            elif stack and m[c] == stack[-1]:
                stack.pop()
            else:
                return False

        if stack:
            return False
        return True
            