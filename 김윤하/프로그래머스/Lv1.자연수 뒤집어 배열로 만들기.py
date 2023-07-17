def solution(n):
    answer = []
    for i in str(n):
        answer.append(int(i))
    answer.reverse()
    return answer

def solution2(n):
    answer = list(map(int, reversed(str(n))))
    return answer

