const fs = require("fs");

function solution(input) {
  const lines = input.trim().split("\n");
  const arr = lines[1].split(" ").map((x) => BigInt(x));

  let sum = 0n;
  let sumOfSquares = 0n;

  for (const num of arr) {
    sum += num;
    sumOfSquares += num * num;
  }

  // 수학적 공식: (a+b+c)² = a²+b²+c² + 2(ab+ac+bc)
  // 따라서 ab+ac+bc = ((a+b+c)² - (a²+b²+c²)) / 2
  return (sum * sum - sumOfSquares) / 2n;
}

const input = fs.readFileSync("/dev/stdin").toString();

console.log(String(solution(input)));