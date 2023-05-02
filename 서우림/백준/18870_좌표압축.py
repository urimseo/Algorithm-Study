'''
정렬
https://www.acmicpc.net/problem/18870
'''

import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))

# print(sorted(arr))
lst = sorted(list(set(arr)))
dic = {lst[i] : i for i in range(len(lst))}
for i in arr:
    print(dic[i], end=' ')





