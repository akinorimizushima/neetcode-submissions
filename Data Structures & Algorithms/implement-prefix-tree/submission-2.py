class TrieNode:
    def __init__(self, val = None):
        self.val = val
        self.children = {}
        self.isEnd = False

class PrefixTree:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for c in word:
            if c in curr.children:
                curr = curr.children[c]
            else:
                curr.children[c] = TrieNode(c)
                curr = curr.children[c]
        curr.isEnd = True

    def search(self, word: str) -> bool:
        a = word == "app"
        curr = self.root
        for i in range(len(word)):
            w = word[i]
            if w in curr.children:
                curr = curr.children[w]
            else:
                return False

        
        return curr.isEnd

    def startsWith(self, prefix: str) -> bool:
        curr = self.root

        for w in prefix:
            if w in curr.children:
                curr = curr.children[w]
            else:
                return False
        return True
        