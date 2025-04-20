def change_sec(v_len):
    v_min, v_sec = v_len.split(":")
    v_total = int(v_min) * 60 + int(v_sec)
    return v_total

def solution(video_len, pos, op_start, op_end, commands):
    v_len = change_sec(video_len)
    op_s = change_sec(op_start)
    op_e = change_sec(op_end)
    pos = change_sec(pos)
    time = pos
    if op_s <= time <= op_e:
        time = op_e
    for word in commands:
        if word == "next":
            # 오프닝 구간에서 next나 prev를 할 경우 오프닝 끝나는 위치 파악 하기
            tmp = time + 10
            if tmp > v_len:
                time = v_len
            else:
                time = tmp
        elif word == "prev":
            tmp = time - 10
            if tmp < 0:
                time = 0
            else:
                time = tmp
        # 오피닝 구간에서는 무조건 오픠닝 마지막으로 이동해야함
        if op_s <= time <= op_e:
            time = op_e
    # 형식변환
    m, s = divmod(time, 60)
    str(m) + ":" + str(s)
    return f"{m:02d}:{s:02d}"



print(solution("10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"]))


# 풀이2
def change_sec(v_len):
    v_min, v_sec = v_len.split(":")
    v_total = int(v_min) * 60 + int(v_sec)
    return v_total

def solution(video_len, pos, op_start, op_end, commands):
    v_len = change_sec(video_len)
    op_s = change_sec(op_start)
    op_e = change_sec(op_end)
    pos = change_sec(pos)
    time = pos
    if op_s <= time <= op_e:
        time = op_e
    for word in commands:
        if word == "next":
            # 오프닝 구간에서 next나 prev를 할 경우 오프닝 끝나는 위치 파악 하기
            tmp = time + 10
            if tmp > v_len:
                time = v_len
            else:
                time = tmp
        elif word == "prev":
            tmp = time - 10
            if tmp < 0:
                time = 0
            else:
                time = tmp
        # 오피닝 구간에서는 무조건 오픠닝 마지막으로 이동해야함
        if op_s <= time <= op_e:
            time = op_e
    # 형식변환
    m, s = divmod(time, 60)
    str(m) + ":" + str(s)
    return f"{m:02d}:{s:02d}"



# 풀이2
def time_to_seconds(time_str):
    minutes, seconds = map(int, time_str.split(":"))
    return minutes * 60 + seconds

def seconds_to_time(seconds):
    minutes = seconds // 60
    seconds = seconds % 60
    return f"{minutes:02d}:{seconds:02d}"

def solution2(video_len, pos, op_start, op_end, commands):
    video_length = time_to_seconds(video_len)
    current_pos = time_to_seconds(pos)
    op_start_time = time_to_seconds(op_start)
    op_end_time = time_to_seconds(op_end)

    # 초기 위치가 오프닝 구간에 있으면 op_end로 이동
    if op_start_time <= current_pos <= op_end_time:
        current_pos = op_end_time

    for command in commands:
        if command == "prev":
            current_pos = max(0, current_pos - 10)
        elif command == "next":
            current_pos = min(video_length, current_pos + 10)

        # 이동 후 위치가 오프닝 구간에 있으면 op_end로 이동
        if op_start_time <= current_pos <= op_end_time:
            current_pos = op_end_time

    return seconds_to_time(current_pos)



print(solution("10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"]))

