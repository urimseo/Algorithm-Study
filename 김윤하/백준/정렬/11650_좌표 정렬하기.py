N = int(input())

temp = []

# 데이터 이중 리스트로 입력받기
for i in range(N):
    [x, y] = map(int, input().split())
    temp.append([x, y])

result = sorted(temp, key=lambda x: (x[0], x[1]))

for x, y in result:
    print(x, y)

