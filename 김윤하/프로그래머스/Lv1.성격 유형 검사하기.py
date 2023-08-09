def solution(survey, choices):
    score = { "R": 0, "T":0, "C":0, "F":0, "J":0, "M":0, "A":0,"N":0}
    answer = ''
    for s, c in zip(survey, choices):
        if c > 4:
            score[s[1]] += c-4
        elif c < 4:
            score[s[0]] += abs(c-4)
    answer = "R" if score["R"] >= score["T"] else "T"
    answer = answer + "C" if score["C"] >= score["F"] else answer + "F"
    answer = answer + "J" if score["J"] >= score["M"] else answer + "M"
    answer = answer + "A" if score["A"] >= score["N"] else answer + "N"
    return answer


print(solution(["AN", "CF", "MJ", "RT", "NA"],[5, 3, 2, 7, 5]))