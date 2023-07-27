month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
day = ["FRI","SAT","SUN","MON","TUE","WED","THU"]

def solution(a, b):
    cnt = 0
    for i in range(a):
        cnt += month[i]
    cnt += b
    return day[cnt%7]


def solution2(a, b):
    month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    return day[(sum(month[:a-1])+b-1)%7]
