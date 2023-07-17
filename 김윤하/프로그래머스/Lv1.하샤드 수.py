def solution(x):
    cnt = 0
    for i in str(x):
        cnt += int(i)
    if x%cnt:
        return False
    else:
        return True


def solution2(x):
    cnt = 0
    for i in str(x):
        cnt += int(i)
    return x % cnt == 0