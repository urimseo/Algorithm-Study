# 1. 자물쇠의 크기 키우기
# 2. key를 90도씩 돌리며 확인하기



def solution(key, lock):
    # key 회전 함수
    def rotate(arr):
        lst = [[0] * m for _ in range(m)]
        for r in range(m):
            for c in range(m):
                lst[c][m-r-1] = arr[r][c]
        return lst
    answer = True
    n = len(lock[0])
    m = len(key[0])
    # 확장 key 생성
    lock2 = [[0] * 3*n for _ in range(3*n)]
    for x in range(n, n+n):
        for y in range(n, n+n):
            lock2[x][y] = lock[x-n][y-n]


    # 자물쇠 돌면서 확인하기
    for _ in range(4):
        key = rotate(key)
        for i in range():
            for j in range():
                # locks을 90도씩 회전하면서 키에 비교


    return answer

print(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]],[[1, 1, 1], [1, 1, 0], [1, 0, 1]]))