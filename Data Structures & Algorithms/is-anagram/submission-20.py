class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        sChars = {}
        tChars = {}

        for i in range(len(s)):
            sChars[s[i]] = sChars.get(s[i]) + 1 if s[i] in sChars else 1
            tChars[t[i]] = tChars.get(t[i]) + 1 if t[i] in tChars else 1
        
        for key, value in sChars.items():
            print(key, value)
            if tChars.get(key) != value:
                return False

        return True
        
        