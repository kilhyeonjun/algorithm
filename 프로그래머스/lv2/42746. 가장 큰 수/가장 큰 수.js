const solution = numbers => BigInt(numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('')) + '';