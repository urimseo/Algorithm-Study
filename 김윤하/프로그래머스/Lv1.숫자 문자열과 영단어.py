def solution(s):
    arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
           'eight', 'nine']
    answer = ''
    tmp = ''
    for i in range(len(s)):
        if s[i].isdigit():  # 숫자인 경우
            answer += s[i]
        else: # 문자열인 경우
            tmp += s[i]
            if tmp in arr:
                answer += str(arr.index(tmp))
                tmp = ''
    return int(answer)


num_dic = {"zero":"0", "one":"1", "two":"2", "three":"3", "four":"4", "five":"5", "six":"6", "seven":"7", "eight":"8", "nine":"9"}

def solution2(s):
    answer = s
    for key, value in num_dic.items():
        answer = answer.replace(key, value)
    return int(answer)
