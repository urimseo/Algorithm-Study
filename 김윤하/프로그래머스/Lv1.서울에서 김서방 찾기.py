def solution(seoul):
    idx = seoul.index("Kim")
    return f"김서방은 {idx}에 있다"


def solution2(seoul):
    return "김서방은 {}에 있다".format(seoul.index("Kim"))

