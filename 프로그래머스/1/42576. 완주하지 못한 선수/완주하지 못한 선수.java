import java.util.HashMap;
import java.util.Map;

class Solution {
    public String solution(String[] participant, String[] completion) {
        Map<String, Integer> participantCount = new HashMap<>();
        
        for (String p : participant) {
            participantCount.put(p, participantCount.getOrDefault(p, 0) + 1);
        }
        
        for (String c : completion) {
            participantCount.put(c, participantCount.get(c) - 1);
            if (participantCount.get(c) == 0) {
                participantCount.remove(c);
            }
        }
        
        return participantCount.keySet().iterator().next();
    }
}