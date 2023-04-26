h = int(input())

count = 0

for i in range(h + 1):  # h시간
    for j in range(60):  # 1시간은 60분
        for k in range(60): # 1분은 60초
            # 매 시각 안에 '3' 포함시 count 증가
            if '3' in str(i) + str(j) + str(k):
                count += 1

print(count)