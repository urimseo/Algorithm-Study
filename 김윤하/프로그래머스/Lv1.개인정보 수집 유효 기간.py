def solution(today, terms, privacies):
    answer = []
    dict_terms = {}
    for term in terms:
        T, M = term.split()
        dict_terms[T] = int(M)

    # 오늘 날짜
    TY, TM, TD = today.split('.')
    today = int(str(TY) + str(TM) + str(TD))  # 비교를 위해 int로 변환


    for p in range(len(privacies)):
        date, term = privacies[p].split()
        Y, M, D = map(int, date.split('.'))

        # 만료일 구하기
        M += dict_terms[term]

        if M % 12 == 0:  # 12배수인 경우
            Y += (M // 12) - 1
            M = 12
        else:  # 12배수가 아닌 경우
            Y += M // 12
            M = M % 12

        # int로 바꾸면서 한 자릿수가 된 month,day 조정
        Y, M, D = str(Y), str(M), str(D)
        if len(M) == 1:
            M = '0' + M
        if len(D) == 1:
            D = '0' + D

        # 오늘 날짜가 약관일 이상인(지난) 경우
        if today >= int(Y + M + D):
            answer.append(p + 1)

    return answer

print(solution("2020.12.17", ["A 12"], ["2010.01.01 A", "2019.12.17 A"]))