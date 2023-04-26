# 선택 정렬 : 가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꿈
# 가장 작은 데이터를 앞으로 보내는 과정을 N-1번 반복

array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
# 1회 완료 array = [0, 5, 9, 7, 3, 1, 6, 2, 4, 8]
# 2회 완료 array = [0, 1, 9, 7, 3, 5, 6, 2, 4, 8]

for i in range(len(array)):
    min_index = i # 가장 작은 원소의 인덱스
    for j in range(i + 1, len(array)):
        if array[min_index] > array[j]:
            min_index = j
    array[i], array[min_index] = array[min_index], array[i]  # 스와프

print(array)