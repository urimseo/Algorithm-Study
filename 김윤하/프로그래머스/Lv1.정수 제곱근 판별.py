def solution(n):
    x = n**(1/2)
    if x == int(x):
        return (x+1)**2
    else:
        return -1