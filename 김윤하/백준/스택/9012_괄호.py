N = int(input())

data = []

for i in range(N):
    data.append(list(input()))


for i in range(N):
    stack = []
    for j in range(len(data[i])):
        if data[i][j] == '(':
            stack.append('(')
        elif data[i][j] == ')':
            if stack:
                stack.pop()
            else:
                data[i] = 'NO'
                break

    else: # break로 안 끊기고 수행한 경우 수행
        if not stack:
            data[i] = 'YES'
        else:
            data[i] = 'NO'


for i in range(N):
    print(data[i])
'''
6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(
'''