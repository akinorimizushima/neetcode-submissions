class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = {
            "}": "{",
            "]": "[",
            ")": "("
        }

        for c in s:
            if c in pairs:
                # stack[-1]
                if stack and stack[-1] == pairs[c]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)

        if len(stack) > 0:
            return False
        return True
            