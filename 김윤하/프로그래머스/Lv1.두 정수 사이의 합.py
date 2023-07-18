def solution(a, b):
    cnt = 0
    if a > b:
        a, b = b, a
    for i in range(a, b + 1):
        cnt += i
    return cnt


def solution(a, b):
    if a > b:
        a, b = b, a
    return sum(range(a, b + 1))

