def solution(board, h, w):
    b_len = len(board)
    
    answer = 0
    for i in ([0,1], [1,0], [0, -1], [-1,0]):
        nh = h + i[0]
        nw = w + i[1]
        if 0 <= nh < b_len and 0<= nw < b_len:
            if board[nh][nw] == board[h][w]:
                answer += 1
    return answer
