'''
p.201
'''

n, m  = map(int, input().split())
arr = list(map(int, input().split()))

maxi = max(arr)
mid = maxi // 2

pre = False
while True:
    tmp = 0
    for rice in arr:
        if rice > mid :
            tmp += (rice - mid)
    if tmp == m:
        break

    elif tmp > m: # 합이 필요양보다 크면 줄이기
        pre = mid
        mid = (maxi+mid) // 2

    elif tmp < m: # 너무 적으니 mid 내리기
        mid = (pre+mid) // 2


print(tmp)

'''
교재 풀이 

start = 0
end = max(arr)

# 이진 탐색 수행
result = 0
while start <= end:
    total = 0
    mid = (start+end) // 2
    for x in arr:
        if x > mid:
            total += x - mid
    # 떡의 양이 부족한 경우 더 많이 잘라야 함 (왼쪽 탐색)
    if total < m:
        end = mid - 1

    else: # 떡의 양이 많으면 적게 잘라야함 (오른쪽 탐색)
        result = mid
        start = mid + 1
print(result)
'''

'''
4 6
19 15 10 17
'''

