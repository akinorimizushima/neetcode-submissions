class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        def plus(a, b):
            return a + b
        def minus(a, b):
            return a - b
        def multi(a, b):
            return a * b
        def div(a, b):
            return a / b
        calcFn = {
            "+": plus,
            "-": minus,
            "*": multi,
            "/": div,
        }
        stack = []

        for curr in tokens:
            fn = calcFn.get(curr)

            if fn:
                last = stack.pop()
                last2 = stack.pop()
                calculated = fn(int(last2), int(last))

                stack.append(calculated)
            else:
                stack.append(curr)
            
        return int(stack[-1])
        