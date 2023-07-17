def solution(n):
    answer = int("".join(sorted(str(n))[::-1]))
    return answer


def solution2(n):
    arr = list(str(n))
    arr.sort(reverse=True)
    return int("".join(arr))