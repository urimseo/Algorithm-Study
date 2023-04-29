N, M = map(int, input().split())
A = []
B = []

for _ in range(N):
    A.append(list(map(int, input().split())))

M, K = map(int, input().split())

for _ in range(M):
    B.append(list(map(int, input().split())))

C = [[0]*K for _ in range(N)]

for n in range(N):   # A의 행
    for k in range(K):  # A의 열, B의 행
        for m in range(M):  # B의 열
            C[n][k] += A[n][m]*B[m][k]

for i in C:
    print(*i)
'''
3 2
1 2
3 4
5 6
2 3
-1 -2 0
0 0 3
'''