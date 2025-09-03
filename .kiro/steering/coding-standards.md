# 코딩 표준 및 문제 해결 가이드

## 알고리즘 문제 해결 접근법

### 문제 분석 단계

1. **문제 이해**: 요구사항과 제약조건 파악
2. **입출력 형식**: 데이터 구조 및 형식 확인
3. **시간/공간 복잡도**: 제한 시간 내 해결 가능한 알고리즘 선택
4. **엣지 케이스**: 경계값 및 특수 상황 고려

### 코드 작성 원칙

- **가독성**: 명확하고 이해하기 쉬운 코드 작성
- **효율성**: 시간 및 공간 복잡도 최적화
- **정확성**: 모든 테스트 케이스 통과
- **일관성**: 프로젝트 전체의 코딩 스타일 통일

## 언어별 코딩 컨벤션

### JavaScript 표준

```javascript
// 변수명: camelCase
const inputData = lines[0];
const resultArray = [];

// 함수명: camelCase
function calculateSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 상수: UPPER_SNAKE_CASE
const MAX_VALUE = 1000000;

// 배열 처리: 내장 메서드 활용
const numbers = input.split(" ").map(Number);
const sortedNumbers = [...numbers].sort((a, b) => a - b);
```

### Java 표준

```java
// 클래스명: PascalCase
public class Solution {
    // 상수: UPPER_SNAKE_CASE
    private static final int MAX_SIZE = 100000;

    // 메서드명: camelCase
    public static int findMaxValue(int[] arr) {
        return Arrays.stream(arr).max().orElse(0);
    }

    // 변수명: camelCase
    int currentIndex = 0;
    List<Integer> resultList = new ArrayList<>();
}
```

### SQL 표준

```sql
-- 키워드: 대문자
SELECT column_name
FROM table_name
WHERE condition = 'value'
ORDER BY column_name ASC;

-- 테이블/컬럼명: snake_case (플랫폼 규칙 따름)
-- 별칭: 명확하고 의미있는 이름 사용
```

## 주석 작성 가이드

### 필수 주석

```javascript
// 문제: 백준 1234번 - 문제명
// 알고리즘: 다이나믹 프로그래밍
// 시간복잡도: O(n²)
// 공간복잡도: O(n)

function solution(n) {
  // DP 테이블 초기화
  const dp = new Array(n + 1).fill(0);

  // 점화식: dp[i] = dp[i-1] + dp[i-2]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
```

### 복잡한 로직 설명

```javascript
// 투 포인터 기법을 사용한 부분합 찾기
function findSubarraySum(arr, target) {
  let left = 0,
    right = 0;
  let currentSum = 0;

  while (right < arr.length) {
    // 현재 합이 목표값보다 작으면 오른쪽 포인터 이동
    currentSum += arr[right];

    // 현재 합이 목표값보다 크면 왼쪽 포인터 이동
    while (currentSum > target && left <= right) {
      currentSum -= arr[left];
      left++;
    }

    if (currentSum === target) {
      return [left, right];
    }

    right++;
  }

  return [-1, -1];
}
```

## 입출력 처리 패턴

### 백준 표준 입출력

```javascript
// Node.js 환경
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

// 한 줄 입력
const n = parseInt(input);

// 여러 줄 입력
const lines = input.split("\n");
const [n, m] = lines[0].split(" ").map(Number);

// 2차원 배열 입력
const matrix = [];
for (let i = 1; i <= n; i++) {
  matrix.push(lines[i].split(" ").map(Number));
}
```

### 프로그래머스 함수형

```javascript
function solution(param1, param2) {
  // 매개변수로 입력 받음
  // 결과값 return

  let answer = 0;

  // 로직 구현

  return answer;
}
```

## 자주 사용되는 알고리즘 패턴

### 정렬 알고리즘

```javascript
// 기본 정렬
arr.sort((a, b) => a - b); // 오름차순
arr.sort((a, b) => b - a); // 내림차순

// 객체 정렬
students.sort((a, b) => {
  if (a.score !== b.score) return b.score - a.score; // 점수 내림차순
  return a.name.localeCompare(b.name); // 이름 오름차순
});
```

### 탐색 알고리즘

```javascript
// 이진 탐색
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
```

### 그래프 탐색

```javascript
// BFS (너비 우선 탐색)
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      // 인접 노드들을 큐에 추가
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
}
```

## 디버깅 및 테스트

### 로컬 테스트 방법

```javascript
// 테스트 케이스 작성
function test() {
  const testCases = [
    { input: "5", expected: 8 },
    { input: "10", expected: 89 },
  ];

  testCases.forEach((testCase, index) => {
    const result = solution(testCase.input);
    const passed = result === testCase.expected;
    console.log(`Test ${index + 1}: ${passed ? "PASS" : "FAIL"}`);
    if (!passed) {
      console.log(`  Expected: ${testCase.expected}, Got: ${result}`);
    }
  });
}
```

### 성능 측정

```javascript
// 실행 시간 측정
console.time("solution");
const result = solution(input);
console.timeEnd("solution");

// 메모리 사용량 확인 (Node.js)
const used = process.memoryUsage();
console.log(
  "Memory usage:",
  Math.round((used.heapUsed / 1024 / 1024) * 100) / 100,
  "MB"
);
```

## 문제 유형별 접근 전략

### 동적 계획법 (DP)

1. **점화식 도출**: 작은 문제의 해를 이용해 큰 문제 해결
2. **메모이제이션**: 중복 계산 방지
3. **초기값 설정**: 기저 조건 명확히 정의

### 그리디 알고리즘

1. **최적 부분 구조**: 지역 최적해가 전역 최적해로 이어지는지 확인
2. **정렬**: 적절한 기준으로 데이터 정렬
3. **선택 기준**: 각 단계에서의 최적 선택 기준 명확화

### 백트래킹

1. **상태 공간 트리**: 가능한 모든 경우의 수 탐색
2. **가지치기**: 불필요한 탐색 경로 제거
3. **복원**: 이전 상태로 되돌리는 과정 구현
