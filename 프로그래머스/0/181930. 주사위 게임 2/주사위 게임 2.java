class Solution {
    public int solution(int a, int b, int c) {
        int sum = a + b + c;
        
        if(a == b && a == c && b == c) 
            return sum * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c);
        else if(a != b && a != c && b != c) return sum;
        
        return sum * (a*a + b*b + c*c);
    }
}