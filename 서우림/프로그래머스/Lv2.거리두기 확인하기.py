'''

'''


def solution(places):
    answer = []

    # 대각선
    dx = [-1, -1, 1, 1]
    dy = [-1, 1, 1, -1]
    # 상하좌우
    di = [0, -1, 0, 1]
    dj = [-1, 0, 1, 0]

    for place in places:
        flag = 1
        for i in range(5):
            for j in range(5):
                if place[i][j] == 'P':
                    # 상하좌우 확인
                    for k in range(1, 3): # 1, 2
                        if flag == 0:
                            break
                        for x in range(4):
                            ni = i + (di[x] * k)
                            nj = j + (dj[x] * k)
                            if 0<=ni<5 and 0<= nj<5:
                                # 인접한 상하좌우에 앉아있을경우 무조건 안됨
                                if k == 1 and place[ni][nj] == 'P':
                                    flag = 0
                                    break
                                # 한칸 떨어져 있을 경우
                                elif k == 2 and place[ni][nj] == 'P':
                                    # 만약 사이가 x 라면 가능
                                    if place[i + di[x]][j + dj[x]] != 'X':
                                        flag = 0
                                        break
                    # 대각선 확인
                    for t in range(4):
                        if flag == 0:
                            break
                        nx = i + dx[t]
                        ny = j + dy[t]
                        if 0 <= nx < 5 and 0 <= ny < 5 and place[nx][ny] == 'P':
                            if place[i][ny] == 'X' and place[nx][j] == 'X':
                                continue
                            else:
                                flag = 0
                                break
        answer.append(flag)

    return answer


print(solution([["OOPOO", "OPOOO", "OOOOO", "OOOOO", "OOOOO"],["POOPO", "OOOOO", "OOOXP", "OPOPX", "OOOOO"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]))