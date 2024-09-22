s_pair = {"{" : "}", "(" : ")", "[" : "]"}
e_pair = {'}': '{', ')': '(', ']': '['}
def check(bracket):
    stack = []
    for b in bracket:
        if b in s_pair:
            stack.append(b)
        else:
            if stack and (e_pair[b] == stack[-1]):
                # stack.remove(e_pair[b])
                stack.pop(-1)
            else:
                return 0
    # stack에 괄호가 남아있다면 짝이 맞지 않는다는 뜻.
    if stack:
        return 0
    return 1
def solution(s):
    answer = 0
    # 1. 괄호들을 회전
    # 2. 올바른 괄호 문자 확인 - check함수 사용
    # stack 에 집어 넣고 그 다음 pop
    # stack에는 "{", "(", "["만 pop 할 수 있음.
    s = list(s)
    for i in range(len(s)):
        rev = s.pop(0)
        s.append(rev)
        answer += check(s)
                
    return answer


solution("{(})")