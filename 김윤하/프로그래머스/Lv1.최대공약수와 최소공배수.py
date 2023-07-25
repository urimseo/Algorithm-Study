def solution(n, m):
    answer = []

    # 최대공약수 찾기
    n_ys = [n]  # 자기 자신 언제나 약수
    m_ys = [m]
    for i in range(1, n // 2 + 1):
        if n % i == 0:
            n_ys.append(i)
    for i in range(1, m // 2 + 1):
        if m % i == 0:
            m_ys.append(i)
    max_ys = max(list(set(n_ys) & set(m_ys)))
    answer.append(max_ys)

    # 최소공배수 찾기
    n_bs = []
    m_bs = []
    for i in range(1, m + 1):
        n_bs.append(n * i)
    for i in range(1, n + 1):
        m_bs.append(m * i)
    min_bs = min(list(set(n_bs) & set(m_bs)))
    answer.append(min_bs)

    return answer


def gcdlcm(a, b):
    c,d = max(a, b), min(a, b)
    t = 1
    while t>0:
        t = c%d
        c, d = d, t
    answer = [c, int(a*b/c)]
    return answer

# 아래는 테스트로 출력해 보기 위한 코드입니다.
print(gcdlcm(2,5))