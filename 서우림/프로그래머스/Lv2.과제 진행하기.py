def solution(plans):
    answer = []
    info = {}
    for plan in plans:
        times = plan[1].split(':')
        plan[1] = int(times[0]) * 60 + int(times[1])
        plan[2] = int(plan[2])
        info[plan[1]] = [plan[0], plan[2]]
    plans.sort(key=lambda x: x[1])

    time = plans[0][1]
    cnt = 0
    stk = [] # [과목, 남은시간]
    while len(plans) > cnt:
        # 그 시간에 시작해야 하는 일이 있다면
        if time in info:
            stk.append(info[time])

        # 만약 스택에 할 일이 있다면 - 현재 시점에 해야하는 것을 stk에 넣었으니 뒤에서부터 일을 해야함
        if stk:
            stk[-1][1] -= 1  # 일 하고 시간 빼기
            if stk[-1][1] == 0:
                answer.append(stk[-1][0])
                stk.pop() # 일 끝난거 빼기
                cnt += 1

        time += 1

    return answer

print(solution([["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]]))
