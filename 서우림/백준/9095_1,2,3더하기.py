'''
f(n) = f(n-1) + f(n-2) + f(n-3)
f(1) = 1
f(2) = 2
f(3) = 4
f(4) = 7
'''

dp = [0, 1, 2, 4, 7] + [0] * 6

for _ in range(int(input())):
    n = int(input())
    for i in range(5, n+1):
        if not dp[i]:
            dp[i] = dp[i-1] + dp[i-2] + dp[i-3]


    print(dp[n])


