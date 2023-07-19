def solution(s):
    a, b = divmod(len(s), 2)
    if b:
        return s[a]
    else:
        return s[a-1]+s[a]


def solution2(s):
    return s[(len(s)-1)//2 : len(s)//2 + 1]
