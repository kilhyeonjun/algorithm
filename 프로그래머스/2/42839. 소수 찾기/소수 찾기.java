import java.util.*;

class Solution {
    public int solution(String numbers) {
        Set<Integer> primes = new HashSet<>();
 
        for (int i = 1; i <= numbers.length(); i++) {
            combinations(numbers, i, "", new boolean[numbers.length()], primes);
        }
        
        return primes.size();
    }
    
    private void combinations(String numbers, int length, String current, boolean[] used, Set<Integer> primes) {
        if (current.length() == length) {
            int num = Integer.parseInt(current);
            if (isPrime(num)) {
                primes.add(num);
            }
            return;
        }
        
        for (int i=0; i < numbers.length(); i++) {
            if (!used[i]) {
                used[i] = true;
                combinations(numbers, length, current + numbers.charAt(i), used, primes);
                used[i] = false;
            }
        }
    }
    
    private boolean isPrime(int n) {
        if(n < 2) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
}