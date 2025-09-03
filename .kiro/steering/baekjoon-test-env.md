---
inclusion: fileMatch
fileMatchPattern:
  ["**/백준/**/*", "**/test/**/*", "**/*test*", "**/solution.js"]
---

# 백준 테스트 환경 생성 가이드

## 🚫 핵심 금지사항

- **절대로 완성된 솔루션을 제공하지 마세요**
- 알고리즘 힌트나 구현 방법을 직접 제시하지 마세요
- 사용자가 직접 문제를 풀 수 있도록 빈 템플릿만 제공하세요

## 환경 생성 원칙

### 폴더 및 파일 구성

- `test/` 폴더에 모든 파일 생성
- 기존 test 폴더 확인 후 덮어쓰기
- 필수 파일: `solution.js`, `input.txt`, `README.md`
- 추가 파일: `input2.txt`, `input3.txt` (예제가 여러 개인 경우)

### 표준 솔루션 템플릿

```javascript
// 문제: 백준 [문제번호]번 - [문제명]
// 알고리즘:
// 시간복잡도:

const fs = require("fs");

function solution(input) {
  const lines = input.trim().split("\n");
  const n = parseInt(lines[0]);
  const arr = lines[1].split(" ").map(Number);

  // 여기에 솔루션 작성

  return 0; // 결과 반환
}

// 입력 처리 - 환경에 따른 자동 선택 (로컬/백준 호환)
let input;
try {
  // /dev/stdin이 존재하면 사용 (백준 환경)
  input = fs.readFileSync("/dev/stdin").toString();
} catch {
  // 없으면 input.txt 사용 (로컬 환경)
  input = fs.readFileSync("input.txt").toString();
}

console.log(solution(input));
```

### 4. 금지 사항

- **절대로 완성된 솔루션을 제공하지 마세요**
- 알고리즘 힌트나 구현 방법을 직접 제시하지 마세요
- 사용자가 직접 문제를 풀 수 있도록 빈 템플릿만 제공하세요

### 5. README.md 구조

- 문제 설명 (HTML에서 추출한 내용 기반)
- 제한사항 (시간, 메모리, 입력 범위)
- 예제 입력/출력
- 실행 방법
- 알고리즘 접근법은 **힌트 수준**으로만 제공

### 6. 테스트 실행 방법 안내

```bash
cd test

# 로컬 테스트 (input.txt 자동 사용)
node solution.js

# 다른 입력 파일로 테스트 (파일명 변경 후)
# input.txt를 input2.txt 내용으로 교체하거나
# 파이프 입력 사용: node solution.js < input2.txt

# 완료 후 정리
cd ..
rm -rf test
```

### 7. 문제 정보 수집

- 사용자가 문제 HTML을 제공하면 해당 정보를 활용
- curl로 직접 접근이 안 되는 경우 일반적인 백준 문제 형식으로 구성
- 예제 입력/출력은 정확히 추출하여 테스트 파일로 생성

## 응답 패턴

사용자가 "백준 [문제번호] 테스트 환경 만들어줘" 요청 시:

1. test 폴더 생성
2. 빈 solution.js 템플릿 생성 (백준 표준 입력 방식 적용)
3. 예제 입력 파일들 생성
4. README.md 생성
5. "이제 solution.js에서 직접 문제를 풀어보세요!" 안내
6. 테스트 방법: `node solution.js` (input.txt 자동 사용) 안내

## Best Practice 원칙

### 입력 처리 방식

- **자동 환경 감지**: try-catch로 `/dev/stdin` 존재 여부 확인
- **로컬 테스트**: `input.txt` 파일 자동 사용
- **백준 호환**: 코드 수정 없이 바로 제출 가능
- **유연성**: 파이프 입력도 여전히 지원

### 코드 품질

- 함수 분리로 가독성 향상
- 명확한 변수명 사용
- 효율적인 알고리즘 구현 유도
- 환경별 입력 처리 자동화

**중요**: 사용자의 학습을 위해 절대로 완성된 답안을 제공하지 마세요.
