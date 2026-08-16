class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        a = {}
        b = {}

        for c in s:
            if a.get(c):
                a[c] = a[c] + 1
            else:
                a[c] = 1;
        for c in t:
            if b.get(c):
                b[c] = b[c] + 1
            else:
                b[c] = 1;

        if len(a) != len(b):
            return False

        for c in b:
            if a.get(c) != b.get(c):
                return False

        return True
        
        