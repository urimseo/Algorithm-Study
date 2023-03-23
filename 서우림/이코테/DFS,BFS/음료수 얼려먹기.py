'''
P.149
'''
from collections import deque

N, M = map(int, input().split())
maps = []
for i in range(N):
    tmp = list(map(str, input()))
    maps.append(list(map(int, tmp)))
cnt = 0
q = deque()
for i in range(N):
    for j in range(M):
        if maps[i][j] == 0:
            q.append(i)
            q.append(j)
            maps[i][j] = -1
            cnt += 1
            while q:
                x = q.popleft()
                y = q.popleft()
                for n in ([[0,1],[1,0],[0,-1],[-1,0]]):
                    ni = x + n[0]
                    nj = y + n[1]
                    if 0<= ni < N and 0 <= nj < M and maps[ni][nj] == 0:
                        maps[ni][nj] = -1
                        q.append(ni)
                        q.append(nj)

print(cnt)