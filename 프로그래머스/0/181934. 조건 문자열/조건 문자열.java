class Solution {
    public int solution(String ineq, String eq, int n, int m) {
        if(eq.equals("=") && n == m){
            return 1;
        }
        
        return ineq.equals("<") ? (n < m ? 1 : 0) : (n > m ? 1 : 0);
    }
}