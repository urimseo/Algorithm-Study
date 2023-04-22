'''

'''
import sys
input = sys.stdin.readline

s = input().rstrip()
tmp = ''
rev = ''
ans = ''

def rever(rev, a):
    for i in range(len(rev) - 1, -1, -1):
        a += rev[i]
    return a


for i in range(len(s)):
    if (s[i] == '<' or tmp) and s[i] != '>':
        if len(rev) >= 1:
            ans = rever(rev, ans)
            rev = ''
        tmp += s[i]

    elif s[i] == '>':
        tmp += s[i]
        ans += tmp
        tmp = ''
    elif s[i] == ' ':
        rev = ' ' + rev
        ans = rever(rev, ans)
        rev = ''

    else:
        rev += s[i]

if len(rev)> 1 :
    ans = rever(rev, ans)

print(ans)




