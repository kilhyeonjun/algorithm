class Solution {
    public int solution(int n) {
        int answer = 0;
        int mod = n % 2;
        
        for(int i=1; i<=n; i++) {
            if(i % 2 == mod) {
                answer += mod == 1 ? i : i*i;
            } 
        }
        
        return answer;
    }
}