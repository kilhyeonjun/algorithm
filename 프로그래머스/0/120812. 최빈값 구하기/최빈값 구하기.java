import java.util.*;

class Solution {
    public int solution(int[] array) {
        Map<Integer, Integer> map = new HashMap();
        boolean isDuplicate = false;
        int mode = -1;
        int maxFrequency = 0;
        
        for(int n: array) {
            int frequency = map.getOrDefault(n, 0) + 1;
            map.put(n, frequency);
            
            if(frequency > maxFrequency) {
                maxFrequency = frequency;
                mode = n;
                isDuplicate = false;
            }else if (frequency == maxFrequency){
                isDuplicate = true;
            }
        }
        
        return isDuplicate ? -1 : mode;
    }
}