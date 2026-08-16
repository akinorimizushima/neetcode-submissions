class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        m = {
            "]": "[",
            ")": "(",
            "}": "{",
        }


        for c in s:
            if c in m:
                if stack and stack[-1] == m[c]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)
            
        if len(stack) > 0:
            return False

        return True