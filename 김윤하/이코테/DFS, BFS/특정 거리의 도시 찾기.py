from collections import deque

# 도시 개수, 도로 개수, 거리 정보, 출발 도시 번호
N, M, K, X = map(int, input().split())
graph = [[] for _ in range(N+1)] # 도시 번호 1부터 시작하므로

# 도로 정보 입력 받기
for _ in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)


# 모든 도시에 대한 최단거리 초기화
distance = [-1] * (N + 1)
distance[X] = 0  # 출발 도시까지의 거리는 0으로 설정

# BFS 수행
q = deque([X])
while q:
    # 큐에서 하나의 원소를 뽑아
    now = q.popleft()
    # 현재 도시에서 이동할 수 있는 모든 도시 확인
    for next_node in graph[now]:
        # 방문하지 않았다면
        if distance[next_node] == -1:
            # 최단거리 갱신
            distance[next_node] = distance[now] + 1
            q.append(next_node)

# [출력]
# 최단 거리가 K인 모든 도시의 번호를 오름차순으로 출력
check = False
for i in range(1, N + 1):
    if distance[i] == K:
        print(i)
        check = True

# 최단 거리가 K인 도시가 없는 경우 -1
if check == False:
    print(-1)