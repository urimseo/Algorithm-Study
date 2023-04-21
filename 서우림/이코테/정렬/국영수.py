'''
P.359_정렬
'''

n = int(input())
lst = []
for _ in range(n):
    name, g, y, s = input().split()
    lst.append([name, int(g), int(y), int(s)])



lst.sort(key=lambda x: (-x[1], x[2], -x[3], x[0]))
for l in lst:
    print(l[0])