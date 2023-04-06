'''
실5_그리디
'''
s = input()
# a - 0의 개수 카운드, b - 1의개수 카운드

flag = False
dic = {'1': 0, '0': 0}
for i in range(1, len(s)):
    # 다를 경우 묶음쌍 갱신 -> 같으면 그냥 continue
    if s[i - 1] != s[i]:
        dic[s[i - 1]] += 1
        flag = True

if flag:
    dic[s[i]] += 1

print(min(dic.values()))
