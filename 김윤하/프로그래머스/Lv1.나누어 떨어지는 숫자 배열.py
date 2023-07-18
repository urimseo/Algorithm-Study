def solution(arr, divisor):
    answer = []
    for i in arr:
        if i % divisor == 0:
            answer.append(i)
    return sorted(answer) if len(answer) else [-1]


def solution(arr, divisor):
    return sorted([n for n in arr if n % divisor == 0]) or [-1]


'''
and 와 or 의 return value 

1) A and B

- A,B 둘 다 참이면 B 를 출력

- A,B 둘 다 거짓이면 A 를 출력

- A, B 둘 중에 하나만 참이면 거짓인 값을 출력

 

2) A or B

- A,B 둘 다 참이면 A 를 출력

- A,B 둘 다 거짓이면 B 를 출력

- A, B 둘 중에 하나만 참이면 참인 값을 출력
'''