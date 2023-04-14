'''
p.322 08
'''

n = input()
tmp = 0
arr = []
for i in n:
    if i.isdecimal():
        tmp += int(i)
    else:
        arr.append(i)

arr.sort()
ans = ''.join(arr) + str(tmp)

print(ans)

'''
K1KA5CB7

AJKDLSI412K4JSJ9D
'''