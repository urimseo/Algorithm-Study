n, k = map(int, input().split())
result = 0

# N이 K 이상이라면 K로 계속 나누기
while n >= k:
    # 나누어 떨어지지 않으면 n-1
    while n % k != 0:
        n -= 1
        result += 1
    # K로 나누기
    n //= k
    result += 1

# n이 1 될 때까지 -1 하기
while n > 1:
    n -= 1
    result += 1

print(result)