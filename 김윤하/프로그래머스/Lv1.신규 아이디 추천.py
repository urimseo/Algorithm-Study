def solution(new_id):
    answer = ''
    new_id = new_id.lower()

    for word in new_id:
        if word.isalnum() or word in '-_.':
            answer += word

    while ".." in answer:
        answer = answer.replace("..", ".")


    answer = answer[1:] if answer[0] == '.' and len(answer) > 1 else answer
    answer = answer[:-1] if answer[-1] == '.' else answer

    answer = 'a' if answer == '' else answer

    answer = answer[:15] if len(answer) > 15 else answer
    answer = answer[:-1] if answer[-1] == '.' else answer

    while len(answer) < 3:
        answer += answer[-1]

    return answer