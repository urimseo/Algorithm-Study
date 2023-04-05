n, m = map(int, input().split())
lst = [0] * (m + 1)
dict = {}
for _ in range(n):
    c, s = map(int, input().split())
    lst[c] += s
    if c in dict:
        dict[c] += 1
    else:
        dict[c] = 1

for k, v in dict.items():
    lst[k] = lst[k] / v

print(lst.index(max(lst)))