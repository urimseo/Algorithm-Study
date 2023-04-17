'''
p.321 실전 07
'''

# 정수가 주어지지만 str 로 입력받아도 됨
s = input()
a = 0
b = 0
for i in range(len(s)):
    if i < (len(s)//2):
        a += int(s[i])
    else:
        a -= int(s[i])

if a == 0:
    print('LUCKY')
else:
    print('READY')