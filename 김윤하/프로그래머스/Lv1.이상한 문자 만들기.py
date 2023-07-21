def solution(s):
    answer = []
    words = s.split(" ")
    for word in words:
        new_word = ""
        for j in range(len(word)):
            if j % 2 == 0:
                new_word += word[j].upper()
            else:
                new_word += word[j].lower()
        answer.append(new_word)
    return " ".join(answer)
