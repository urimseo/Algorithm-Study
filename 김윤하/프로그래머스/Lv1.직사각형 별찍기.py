a, b = map(int, input().strip().split(' '))
for i in range(b):
    for j in range(a):
        print('*', end='')
    print(end='\n')



# a, b = map(int, input().strip().split(' '))
# answer = ('*'*a +'\n')*b
# print(answer)