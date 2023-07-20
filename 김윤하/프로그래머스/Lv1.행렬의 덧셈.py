def solution(arr1, arr2):
    x, y = len(arr1), len(arr1[0])
    answer = [[0 for _ in range(y)] for _ in range(x)]
    for i in range(x):
        for j in range(y):
            answer[i][j] = arr1[i][j] + arr2[i][j]

    return answer


arr1 = [[1, 2], [2, 3]]
arr2 = [[3, 4], [5, 6]]


def sumMatrix(A,B):
    return [list(map(sum, zip(*x))) for x in zip(A, B)]

# 아래는 테스트로 출력해 보기 위한 코드입니다.
print(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]))


