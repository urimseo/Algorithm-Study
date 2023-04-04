'''
이코테
문자열 압축하여 가장 짧은 문자열로 표현
'''

def solution(s):
    answer = []

    for i in range(1, (len(s)//2) + 1):
        res = ''
        cnt = 1
        tmp = s[:i]
        # 자른 문자열이랑 일치하는것 찾기
        for j in range(i, len(s), i):
            # 일치하면 숫자 증가하고 continue
            if tmp == s[j:j+i]:
                cnt += 1
            else: # 불일치하면 끝냄
                if cnt == 1:
                    res += tmp
                else:
                    res += str(cnt) + tmp
                tmp = s[j:i+j]
                cnt = 1
        # 반복문이 끝난 이후에 남아있는 문자 더하기
        if cnt != 1:
            res += str(cnt) + tmp
        else:
            res += tmp
        answer.append(len(res))

    return min(answer)
print(solution("ababcdcdababcdcd"))
