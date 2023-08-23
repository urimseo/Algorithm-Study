def solution(board, moves):
    N = len(board)
    basket = []
    answer = 0
    for i in moves:
        for j in range(N):
            if board[j][i-1] != 0:
                basket.append(board[j][i-1])
                board[j][i-1] = 0

                if len(basket) > 1:
                    if basket[-2] == basket[-1]:
                        basket.pop()
                        basket.pop()
                        answer += 2

                break

    return answer

