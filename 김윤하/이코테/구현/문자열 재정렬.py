word = input()

result = []

value = 0

for x in word:
    # 알파벳인 경우
    if x.isalpha():
        result.append(x)
    # 숫자는 더해서 출력하기
    else:
        value += int(x)

result.sort()

if value != 0:
    result.append(str(value))

# 결과 출력
print(''.join(result))

'''
K1KA5CB7
'''