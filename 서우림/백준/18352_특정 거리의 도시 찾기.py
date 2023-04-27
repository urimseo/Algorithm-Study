'''
이코테 실전15 _ p.339
- 모든 거리가 1로 동일. -> bfs를 활용
'''
from collections import deque
import sys
input = sys.stdin.readline

n, m, k, x = map(int, input().split())
graph = [[] for _ in range(n+1)]
q = deque([x])
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)

visited = [-1] * (n+1)
# 시작점은 0
visited[x] = 0
ans = []
while q:
    s = q.popleft()
    for i in graph[s]:
        # 방문하지 않았으면
        if visited[i] == -1:
            # 현재거리부터 이동거리 + 1 이 최단거리임
            visited[i] = visited[s] + 1
            q.append(i)

if k in visited:
    for i in range(n+1):
        if visited[i] == k:
            print(i)
else:
    print(-1)
