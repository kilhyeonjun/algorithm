import java.util.HashSet;

class Solution {
    public int solution(int[] nums) {
        HashSet<Integer> uniqueTypes = new HashSet<>();
        int maxChoice = nums.length / 2;
        
        for(int num : nums) {
            uniqueTypes.add(num);
            if(uniqueTypes.size() == maxChoice) return maxChoice;
        }
        
        return uniqueTypes.size();
    }
}