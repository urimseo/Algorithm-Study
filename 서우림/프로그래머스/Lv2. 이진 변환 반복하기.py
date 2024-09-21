# https://school.programmers.co.kr/learn/courses/30/lessons/70129?language=python3


def solution(s):
    answer = []
    num = 0
    cnt = 0
    while True:
        if s == "1":
            break
        cnt += 1
        num += s.count("0")
        s = s.replace("0", "")
        s = bin(len(s))[2:]
        
    
    return [cnt, num]

"""
>>> bin(number)
전달받은 integer 혹은 long integer 자료형의 값을 이진수(binary) 문자열로 돌려준다. 
__builtin__ module에 포함된 function

bin(int)는  "0b"라는 접두어를 포함함. 따라서 슬라이싱[2:]를 해서 없애는것!


이진수(binary), 
>>> a = bin(87)
>>> a
'0b1010111'
>>> type(a)
<class 'str'> 



"""