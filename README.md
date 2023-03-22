# 📝Algorithm Study

- 평일 1일 1문제 풀이 하고 커밋합니다. 

- 각자 브랜치에 작업후 월요일 16시에 만나서 merge 



## 📍 Commit Message Convention

#### 플랫폼 코드 작성법

- [TIC] - 이것이 코딩 테스트다
- [BOJ] - 백준
- [PGS] - 프로그래머스
- [LTC] - 리트코드
- [CFS] - 코드포스
- [SEA] - 삼성SW Expert Academy
- [ETC] - 그외

#### 기타 Convention

- [MOD] : 코드(문법 오류 해결, 타입 변경, 이름 변경 ) 및 내부 파일 등의 수정
- [DEL] : 쓸모없는 코드나 파일 삭제
- [DOCS] : README 등의 문서 개정
- [MOVE] : 프로젝트 파일 및 코드 이동
- [RENAME] : 파일 이름 변경
- [MERGE] : 다른 브랜치와의 충돌 해결 후 Merge



## Fork

#### Origin

1. push

```bash
git push origin main
```



#### Fork

##### 받을 때 

1. origin 내용 update
   ```bash
   git fetch upstream 
   git merge upstream/main
   ```

2. fork repository에 origin push

   ```bash
   git push
   ```

   

##### 올릴 때 

1. pull request 

   github에서 pull request 날리기

2. ```bash
   git fetch upstream
   ```



