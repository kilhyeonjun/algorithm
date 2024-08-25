class Solution {
    public int solution(int[] num_list) {
        StringBuilder sb1 = new StringBuilder();
        StringBuilder sb2 = new StringBuilder();
        
        for(int num : num_list){
            if(num % 2 == 0) sb1.append(num);
            else sb2.append(num);
        }
        
        return Integer.parseInt(sb1.toString()) + Integer.parseInt(sb2.toString());
    }
}