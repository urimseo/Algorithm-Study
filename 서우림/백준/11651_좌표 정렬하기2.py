'''
정렬
https://www.acmicpc.net/problem/11651
'''
import sys
input = sys.stdin.readline

n = int(input())
lst = []
for _ in range(n):
    n, m = map(int, input().split())
    lst.append([n, m])

ans = sorted(lst, key=lambda x: (x[1], x[0]))


for a in ans:
    print(*a)