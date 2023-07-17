n = int(input())

adventurers = list(map(int, input().split()))
adventurers.sort()

count = 0
group = 0

for i in adventurers:
    count += 1      # 현재 그룹에 해당 모험가 포함시키기
    if count >= i:  # 모험가의 수 > 현재 공포도 이상
        group += 1  # 그룹 수 증가시키고
        count = 0   # 모험자 초기화

print(group)