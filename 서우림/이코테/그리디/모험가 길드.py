'''
p.311 실전 1
'''

# 공포도가 x => x명 이상으로 구성한 모험가 그룹에 참여해야 함
# 최대 몇개의 모험가 그룹?

n = int(input())

arr = list(map(int, input().split()))

arr.sort()
ans = 0
group = 0
for i in arr:
    group += 1
    if i <= group:
        ans += 1
        group = 0


print(ans)

'''
5
2 3 1 2 2
'''