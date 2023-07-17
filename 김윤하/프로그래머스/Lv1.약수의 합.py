def solution(n):
    answer = 0
    for i in range(1, n+1):
        if n%i == 0:
            answer += i
    return answer

def solution2(n):
    answer = 0
    for i in range(1, n//2+1):
        if n%i == 0:
            answer += i
    return answer + n  # 자기 자신은 언제나 자기 자신의 약수이므로 n 더하고 num//2 인 수만 검사