'''
dfs
'''
import sys
input = sys.stdin.readline
n, m = map(int, input().split())
cnt = 0

graph = [[] for _ in range(n+1)]
visited = [False] * (n+1)
for _ in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)


def DFS(v):
    visited[v] = True

    for node in graph[v]:
        if not visited[node]:
            DFS(node)

for i in range(1, n+1):
    if not visited[i]:
        DFS(i)
        cnt += 1

print(cnt)




