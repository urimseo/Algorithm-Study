def solution(answers):
    arr1 = [1, 2, 3, 4, 5]
    arr2 = [2, 1, 2, 3, 2, 4, 2, 5]
    arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    score = [0, 0, 0]
    idx = 0
    answer = []

    for i in range(len(answers)):
        if answers[i] == arr1[idx % 5]:
            score[0] += 1
        if answers[i] == arr2[idx % 8]:
            score[1] += 1
        if answers[i] == arr3[idx % 10]:
            score[2] += 1
        idx += 1
    for i, s in enumerate(score):
        if s == max(score):
            answer.append(i + 1)
    return answer
