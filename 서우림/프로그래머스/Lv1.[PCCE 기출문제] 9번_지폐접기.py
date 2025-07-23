def solution(wallet, bill):
    answer = 0
    while True :
        if (min(bill) <= min(wallet)) and max(bill) <= max(wallet):
            break
            
        if bill[0] >= bill[1]:
            bill[0] = bill[0] // 2
        else:
            bill[1] = bill[1] // 2
        
        answer +=1

    return answer