def solution(mats, park):
    answer = 0
    mats = sorted(mats, reverse=True)
    ph = len(park)
    pw = len(park[0])
    for m_len in mats:
        if answer !=0:
            break
        for i in range(ph):
            if answer !=0:
                break
            for j in range(pw):
                if answer !=0:
                    break
                if i+m_len > ph or j+m_len > pw:
                    continue
                # 돗자리 크기만큼 -1로 채워지는지 확인 
                flag = False
                while True:
                    for di in range(i, i+m_len):
                        for dj in range(j,j+m_len):
                            if park[di][dj] != "-1":
                                flag = True
                                break
                        if flag:
                            break
                    if flag:
                        break
                    else:
                        answer = m_len
                        break
    
    return answer if answer > 0 else -1

solution([5, 3, 2], [["A", "A", "-1", "B", "B", "B", "B", "-1"], ["A", "A", "-1", "B", "B", "B", "B", "-1"], ["-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1"], ["D", "D", "-1", "-1", "-1", "-1", "E", "-1"], ["D", "D", "-1", "-1", "-1", "-1", "-1", "F"], ["D", "D", "-1", "-1", "-1", "-1", "E", "-1"]])