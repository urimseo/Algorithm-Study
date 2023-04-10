import sys
from collections import Counter
n = int(sys.stdin.readline())
lst = []
tmp = 0
for _ in range(n):
    x = int(sys.stdin.readline())
    tmp += x
    lst.append(x)
lst.sort()

# 최빈값 구하기
def most_common(lst):
    most = Counter(lst).most_common()
    # counter는 정렬 된 상태로 나옴
    # maxi = sorted(most, key = lambda x : (-x[1], x[0])) # 1 - 빈도수(큰거기준), 0 숫자(작은거 기준)
    if len(lst) >2:
        if most[0][1] == most[1][1]:
            return most[1][0]
        else:
            return most[0][0]
    else:
        return lst[0]


# 산술평균
print(round(tmp/n))
# 중앙값
print(lst[(n//2)])
# 최빈값
print(most_common(lst))
# 범위
print(max(lst) - min(lst))