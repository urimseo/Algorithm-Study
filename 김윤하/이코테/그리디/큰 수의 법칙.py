# 큰 수의 법칙
# 다양한 수로 이루어진 배열이 있을 때 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙
# 배열의 특정한 인덱스)번호에 해당하는 수가 연속해서 K번을 더해질 수 없는 것이 이 법칙의 특징이다.

# 배열의 크기 N
# 숫자가 더해지는 횟수 M
# K번 연속으로 더해질 수 있음


# 입력 예시
# 5 8 3    N M K
# 2 4 5 4 6

# # 1 <= K 이기 때문에 가장 큰 수 2개만 저장하면 된다.
#
# n, m, k = map(int, input().split())
# data = list(map(int, input().split()))
#
# data.sort()  # 입력받은 수 정렬하기
# first = data[n-1]
# second = data[n-2]
#
# result = 0
#
# while True:
#     for i in range(k):  # 가장 큰 수를 K번 더하기
#         if m == 0:  # 반복문 탈출
#             break
#         result += first
#         m -= 1  # 더할 때마다 1씩 빼기
#     if m == 0:
#         break
#     result += second # 두 번째로 큰 수를 한 번 더하기(for문 아님)
#     m -= 1
#
# print(result)


#################################################


# M의 크기가 커지는 경우의 다른 풀이 방법
# 반복되는 수열에 대해 파악하기

# 반복되는 수열의 길이 : K + 1
# M을 (K + 1)로 나눈 몫이 수열이 반복되는 횟수

# 나누어 떨어지지 않는 경우 그 나머지만큼 가장 큰 수가 더해짐.

# 가장 큰 수가 더해지는 횟수
# int(M / (K + 1) * K + M % (K + 1))


n, m, k = map(int, input().split())
data = list(map(int, input().split()))

data.sort()
first = data[n-1]
second = data[n-2]

# 가장 큰 수가 더해지는 횟수 계산
count = int(m / (k + 1) * k)
count += m % (k + 1)

result = 0
result += (count) * first
result += (m - count) * second

print(result)