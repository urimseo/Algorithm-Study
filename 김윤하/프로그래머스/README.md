# 코딩테스트 연습

[TOC]



```javascript
const readline = require('readline');

// 모듈을 이용해 입출력을 위한 인터페이스 객체 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []; // 입력된 값을 저장할 변수

// 생성한 rl 변수를 사용하는 법
rl.on('line', (line) => {  
    // 한 줄씩 입력 받은 후 실행할 코드
    // 입력된 값은 line에 저장된다.
    input = [line];
}).on('close',function(){
    // 입력이 끝난 후 실행할 코드.
    str = input[0];
});
```

### on 메소드

이벤트가 발생할 때 실행할 동작을 지정

```null
rl.on("line", (line) => { ... });
```

### line 이벤트

readline interface를 통해 다룰 이벤트, 사용자가 콘솔에 입력을 할 때 발생

```null
  rl.on("line", (line) => { 
     console.log(line);
  });
```

입력 이벤트는 입력 스트림에 줄바꿈을 나타내는 \n, \r, or \r\n 제어 문자가 나타나거나, 사용자가 Enter 또는 Return을 누를 때 발생
사용자가 입력 이벤트를 발생시키면,line을 통해 사용자가 입력한 내용이 저장되고 이를 콘솔에 출력하는 방식

### close 이벤트

Readable 스트림 종료를 제어하는 이벤트

```null
  rl.on("line", (line) => { 
     console.log(line);
      rl.close(); // close가 없으면 입력을 무한히 받는다.
  });
```



### 구조분해할당

파이썬에 있는 기능과 같다.

```javascript
const [a, b] = input;   // typeof input //Array!!
```



### 형변환

**숫자 > 문자열**

1. `(*숫자 or 불리언*).toString()`

2. `String(*숫자 or 불리언*)`
3. `"" + (*숫자 or 불리언)*`

**문자열 > 숫자**

1) `parseInt(정수 문자열)`  || `parseFloat(실수 문자열)`
2) `Number(문자열 or 불리언)`
3) `+ (문자열 or 불리언)`
4) `(문자열 or 불리언) * 1`



### toUpperCase(), toLowerCase()

String 내장 메서드 : `String.prototype.toUpperCase()`

**`toUpperCase()`** 메서드는 문자열을 대문자로 변환해 반환합니다.

**예시**

```javascript
var char = "abc"
char.toUpperCase()  // ABC
char.toLowerCase()  // abc
```



### map()

Array 내장 메서드 : `Array.prototype.map()`

**`map()`** 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

**용례**

```javascript
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

**예시**

```javascript
const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x * 2);

console.log(map1); // Array [2, 8, 18, 32]
```

```javascript
const stringArray = ["1", "4", "9", "16"];

const map1 = array1.map(Number); // python에서`map(function, iterable)`과 같음

console.log(map1);  // Array [1, 4, 9, 16]
```



### repeat()

String 내장 메서드 : `String.prototype.repeat()`

**`repeat()`** 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

**용례**

```javacript
str.repeat(count);
```

**예시**

```javascript
"abc".repeat(2); // 'abcabc'
```

**참고**

python에서는 그냥 문자열*3 해도 된다.



### 전개 연산자  ...

**전개 구문**을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다.

**함수 호출**

```
myFunction(...iterableObj);
```

**배열 리터럴과 문자열**

```
[...iterableObj, "4", "five", 6];
```

**객체 리터럴(ECMAScript 2018에서 추가):**

```
let objClone = { ...obj };
```



```javascript
var arr = [1, 2, 3];
var arr2 = [...arr]; // arr.slice() 와 유사 // 얕은 복사 : level1에서만 
arr2.push(4);

// arr2 은 [1, 2, 3, 4] 이 됨
// arr 은 영향을 받지 않고 남아 있음
```



### splice()

Array 내장 메서드:`Array.prototype.splice()`

**`splice()`** 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.

**용례**

```javascript
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// 배열.splice(시작[, 삭제할 수(없으면 삭제하지 않고 삽입만 함[, 대체할 것)
```

**예시**

```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months); // Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months); // Array ["Jan", "Feb", "March", "April", "May"]
```



### for

**용례**

```javascript
for ([initialization]; [condition]; [final-expression])
   statement
// for ([초기화]; [조건]; [최종 표현식])
//	구문
```

**예시**

```javascript
for (let i = 0; i < str1.length; i++) answer += str1[i] + str2[i];
```



### for ~ of

**`for...of` 명령문**은 [반복가능한 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterable) ([`Array`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Map`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map), [`Set` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), [`String`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String), [`TypedArray`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), [arguments](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments) 객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다.

**`for...in`**은 Object에서만 사용



**[참고]파이썬**

`for d in data:`





### Math.max()

**Math.max()** 함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환합니다.

```javascript
console.log(Math.max(1, 3, 2)); // 3
console.log(Math.max(-1, -3, -2)); // -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1)); // 3
```

**숫자 배열에서 최대/최소값 찾기**

Math.min 또는 Math.max 메서드에 배열을 넘기면 NaN이 나옵니다.

```
const nums = [1, 2, 3]
Math.min(nums)    // NaN
Math.max(nums)    // Nan
```

그 이유는 Math.min 또는 Math.max 함수는 배열이 아니라 고유한 변수를 기대하기 때문입니다. 이를 위해 ES6/ES2015 적용 방법을 사용해야 합니다.

```
var nums = [1, 2, 3]
Math.min.apply(Math, nums)    // 1
Math.max.apply(Math, nums)    // 3
Math.min.apply(null, nums)    // 1
Math.max.apply(null, nums)    // 3
```

ES6/ES2016의 destructing 할당을 통해 더 쉬워집니다. destructing 할당 구문은 어레이 또는 개체에서 데이터를 추출하여 별도의 변수로 만들 수 있는 JavaScript 식입니다.

```
const nums = [1, 2, 3]
Math.min(...nums)    // 1
Math.max(...nums)    // 3
```

배열 앞에서 어레이를 개별 변수로 변환하여 함수에 전송합니다. 이는 다음과 같습니다.

```
Math.min(1, 2, 3)
Math.max(1, 2, 3)
```

 **[참고] 파이썬**

내장함수 `max()`

1. max(*iterable*, *, *key=None*)

2. max(*iterable*, *, *default*, *key=None*)

3. max(*arg1*, *arg2*, **args*, *key=None*)





### 자바스크립트에서 [-1] 인덱스 사용하기

**기존 방법**

```javascript
// 마지막 값을 얻기
const arrays = ['a','b','c','d'];

// array.length에서 1을 빼 마지막 인덱스 얻어서 사용
arrays[arrays.length - 1]; // 'd'

// 음수 인덱스를 지원하는 slice메소드 간접 사용
arrays.slice(-2, -1); // 'd'Copy
```

**2022 표준 메소드**

```javascript
const arrays = ['a','b','c','d'];

console.log(arrays.at(-1)); // 'd
```