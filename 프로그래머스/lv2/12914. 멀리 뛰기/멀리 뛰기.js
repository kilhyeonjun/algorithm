function solution(n) {
    const arr = [1, 2];
    
    for(let i = 3; i <= n; i++) {
        arr[i - 1] = (arr[i - 2] + arr[i - 3]) % 1234567;
    }
    
    return arr[n - 1] % 1234567;
}