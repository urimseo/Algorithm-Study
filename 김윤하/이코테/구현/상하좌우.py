n = int(input())

x, y = 1, 1  # 현재 좌표
plans = input().split()  # 계획 입력 받기

# 이동 방향 (좌우상하) (x, y)
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ['L', 'R', 'U', 'D']

# 이동 계획을 하나씩 확인
for plan in plans:
    # 이동할 좌표 구하기
    for i in range(4):
        if plan == move_types[i]:
            nx = x + dx[i]
            ny = y + dy[i]
    # 이동할 좌표가 공간을 벗어나는 경우 무시
    if nx < 1 or ny < 1 or nx > n or ny > n:
        continue
    # 이동 수행
    x, y = nx, ny


print(x, y)