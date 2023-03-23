'''
완전탐색
+ - x %
'''
from itertools import permutations

n = int(input())
nums = list(map(int, input().split()))
op = list(map(int, input().split()))
operator = '+' * op[0] + '-' * op[1] + '*' * op[2] + '/' * op[3]

perm = permutations(operator, n-1)

maxi = - int(1e9)
mini = int(1e9)
for per in perm:
    tmp = nums[0]
    for i in range(n-1):
        if per[i] == '+':
            tmp += nums[i+1]
        elif per[i] == '-':
            tmp -= nums[i+1]
        elif per[i] == '*':
            tmp *= nums[i+1]
        else:
            if tmp < 0 and nums[i+1] > 0:
                tmp = -1 * (tmp * (-1) // nums[i+1])
            else:
                tmp //= nums[i+1]
    maxi = max(maxi, tmp)
    mini = min(mini, tmp)


print(maxi)
print(mini)