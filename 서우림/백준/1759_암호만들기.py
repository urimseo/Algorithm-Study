'''
골드5 - 조합
'''

from itertools import combinations
l, m = map(int, input().split())

v = ['a', 'e', 'i', 'o', 'u']

lst = list(input().split())
lst.sort()

comb = combinations(lst, l)

for c in comb:
    mo = 0
    ja = 0
    for i in c:
        if i in v: # 모음이 1개 이상이어야함
            mo += 1
        else:
            ja += 1
    if mo >= 1 and ja >=2:
        print(("".join(c)))



