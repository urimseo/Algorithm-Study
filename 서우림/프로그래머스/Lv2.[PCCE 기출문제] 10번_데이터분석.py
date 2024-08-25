def solution(data, ext, val_ext, sort_by):
    answer = []
    info = {"code" : 0, "date": 1, "maximum":2, "remain":3}

    for d in data:
        z = info.get(ext)
        # print(ext, z, d[z], val_ext)
        if d[z] < val_ext:
            answer.append(d)
    answer.sort(key= lambda x : x[info.get(sort_by)])

    return answer