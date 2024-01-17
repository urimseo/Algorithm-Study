import sys
input = sys.stdin.readline

n = int(input())
lst = list(map(int, input().split()))

ans = 0
arr = []
for i in range(1,n):
    if (i+1) == 2:
        ans += lst[i]
    else:
        flag = True
        for j in range(2, (i+1)):
            if (i+1) % j == 0:
                flag = False
                break
        if flag:
            ans += lst[i]
            arr.append(lst[i])
print(ans)
'''
12
-46 65 13 24 -25 60 -39 31 -21 -10 69 9
83
26
96 -73 22 -55 -17 19 50 -14 -27 84 -97 -79 -52 -20 -25 -19 77 -3 1 54 70 66 -59 -91 19 38
-148
'''