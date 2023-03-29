'''
p.212 피보나치
'''

# 재귀 함수로 구현 - 시간복잡도 O(2^n) -> 효율성 낮음
def fibo(x):
    if x == 1 or x == 2:
        return 1
    return fibo(x-1) + fibo(x-2)


# print(fibo(7))

# 메모이제이션 구현  - 시간복잡도 O(n)
# 1. 재귀 - 탑다운방식
d = [0] * 100

def fibo2(x):
    if x == 1 or x == 2:
        return 1
    if d[x] != 0:
        return d[x]

    d[x] = fibo2(x-1) + fibo2(x-2)
    return d[x]

# print(fibo2(7))

# 2.반복문 - 바텀업
d2 = [0] * 100  # dp 테이블

n = 7
d2[1] = 1
d2[2] = 1

for i in range(3, n+1):
    d2[i] = d2[i-1] + d2[i-2]

print(d2[n])
