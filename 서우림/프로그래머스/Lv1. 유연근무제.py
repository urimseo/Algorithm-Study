def solution(schedules, timelogs, startday):
    answer = 0
    def check_weekend(day):
        if day in (6, 7):
            return True
        else:
            return False
    def change_time(time):
        h = time // 100 * 60
        m = time % 100
        return h + m

    for i in range(len(schedules)):
        goal = change_time(schedules[i])
        logs = timelogs[i]
        d = startday
        for l in logs:
            l_time = change_time(l)
            diff = l_time - goal
            if diff <= 10 or check_weekend(d):
                pass
            else:
                break
            d += 1
            if d > 7:
                d = 1
        else:
            answer += 1


    # print(answer)
    return answer


sc = [730, 855, 700, 720]
ti = [[710, 700, 650, 735, 700, 931, 912], [908, 901, 805, 815, 800, 831, 835], [705, 701, 702, 705, 710, 710, 711], [707, 731, 859, 913, 934, 931, 905]]
st = 1
solution(sc, ti, st)