def solution(n, lost, reserve):
    # 1. lost와 reserve 둘 다 있는 원소 제거
    for i in lost[:]:  # for문 돌 때 삭제하면 빵꾸나므로 [:]로 복사본 안에서 돌기
        if i in reserve:
            lost.remove(i)
            reserve.remove(i)
    # 정렬하기
    lost.sort()
    reserve.sort()

    # 확인하고 세기
    for i in reserve:
        if i - 1 in lost:  # 왼쪽사람한테 먼저 빌려주기
            lost.remove(i - 1)
        elif i + 1 in lost:  # 오른쪽 사람한테 빌려주기
            lost.remove(i + 1)
    return n - len(lost)
