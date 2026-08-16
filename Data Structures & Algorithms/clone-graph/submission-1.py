"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return None

        visited = {}
        def clone(node, dist):
            if node in visited:
                return visited[node]
            # if node == None:
            #     return dist

            copy = Node(node.val)

            visited[node] = copy

            for neighbor in node.neighbors:
                copy.neighbors.append(clone(neighbor, copy))
            
            return copy

        return clone(node, Node(node.val, node.neighbors))
        