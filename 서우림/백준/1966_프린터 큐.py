'''
실버3_구현
'''

from collections import deque
import sys
tc = int(input())

for _ in range(tc):
    # 문서의 개수 / 궁금한 문서
    n, m = map(int, sys.stdin.readline().split())
    cnt = 0
    q = deque()
    # 문서 중요도
    arr = list(map(int, sys.stdin.readline().split()))
    for i in range(n):
        q.append(i)

    # 큐에 인덱스 번호를 삽입
    while q:
        idx = q.popleft()
        # 중요도가 가장 높다면
        if arr[idx] >= max(arr):
            # 출력 후 몇번째인지 확인
            cnt += 1  # 출력
            arr[idx] = -1
            if idx == m:
                print(cnt)
                break
        else: # 중요도 높은게 있다면 마지막으로 이동
            q.append(idx)