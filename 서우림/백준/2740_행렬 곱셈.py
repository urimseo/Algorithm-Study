'''
구현
'''
import sys
input = sys.stdin.readline
n, m = map(int, input().split())
arr = []
brr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))

m, k = map(int, input().split())
for _ in range(m):
    brr.append(list(map(int, input().split())))

lst = [[0 for _ in range(k)] for _ in range(n)]

# 0 1
for i in range(n): # 0 1 2
    for j in range(k): # 0 1
        for z in range(m): # 0 1
            lst[i][j] += arr[i][z] * brr[z][j]

for i in range(n):
    for j in range(k):
        print(lst[i][j], end=' ')
    print()



# numpy를 활용한 행렬 곱
import numpy as np

mat = np.dot(arr, brr).tolist()

for i in mat:
    print(*i)
