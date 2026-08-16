class Solution:
    def isPalindrome(self, s: str) -> bool:
        m = {
            "?": True,
            " ": True,
            ",": True,
            "'": True,
            ".": True,
            ":": True
        }

        lower = s.lower()
        
        l = 0;
        r = len(lower) - 1
        while l < r:
            cl = lower[l]
            cr = lower[r]
            print(cl, cr)
            
            if m.get(cl):
                l = l + 1
                continue
            if m.get(cr):
                r = r - 1
                continue

            if cl != cr:
                return False
            l = l + 1
            r = r - 1
            
        return True
        
        