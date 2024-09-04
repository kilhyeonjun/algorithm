import java.util.*;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        List<Integer> answer = new ArrayList<>();
        int days = 0;
        int count = 0;
        
        for(int i=0; i<progresses.length; i++) {
            int daysNeeded = (int) Math.ceil((100-progresses[i]) / (double) speeds[i]);
            
            if(days < daysNeeded) {
                if(count > 0) {
                    answer.add(count);
                    count = 0;
                }

                days = daysNeeded;
            }
            
            count++;
        }
        
        if(count > 0) answer.add(count);
        
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}