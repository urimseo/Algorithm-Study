'''
P.220
'''

n = int(input())
arr = list(map(int, input().split()))
dp = [0] * n

# 초반 2번까진 무조건 비교 대상
dp[0] = arr[0]
dp[1] = arr[1]

for i in range(2, n):
    # 직전의 창고 턴것과, 그 전의 창고 턴것+지금털 것을 비교 -> 최대값을 dp에 저장
    dp[i] = max(dp[i-1], dp[i-2] + arr[i])

print(dp[n-1])

