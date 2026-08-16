class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = {}

        for s in strs:
            sortedS = "".join(sorted(s))

            if map.get(sortedS):
                map[sortedS].append(s)
            else:
                map[sortedS] = [s]

        return list(map.values())
        