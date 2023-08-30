N = int(input())

data = []

for i in range(N):
    [x, y] = map(int, input().split())
    data.append([x, y])

sorted_data = sorted(data, key= lambda x: (x[1], x[0]))

for x, y in sorted_data:
    print(x, y)