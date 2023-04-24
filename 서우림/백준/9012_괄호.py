from collections import deque

tc = int(input())
for _ in range(tc):
    ps = input()
    q = deque()
    flag = 'YES'
    for i in ps:
        if i == '(':
            q.append('(')
        elif q:
            q.popleft()
        else:
            flag = 'NO'
            break
    if flag == 'YES' and q:
        flag= 'NO'
    print(flag)

