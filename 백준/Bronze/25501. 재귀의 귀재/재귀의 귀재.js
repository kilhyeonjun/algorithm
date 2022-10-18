const fs = require('fs');
const [T, ...arr] = fs.readFileSync(__dirname + "/dev/stdin").toString().trim().split(/\s/);

const recursion = (str, l, r, cnt) => {
    cnt++;
    if (l >= r) return [1, cnt];
    else if (str[l] != str[r]) return [0, cnt];
    else return recursion(str, l + 1, r - 1, cnt);
}
const isPalindrome = (str) => (cnt = 0, recursion(str, 0, str.length - 1, cnt));

for (let i = 0; i < T; i++) console.log(isPalindrome(arr[i]).join(' '))
