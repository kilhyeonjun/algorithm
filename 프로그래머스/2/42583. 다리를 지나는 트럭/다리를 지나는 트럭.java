import java.util.*;

class Solution {
    public int solution(int bridge_length, int weight, int[] truck_weights) {
        int answer = 0;
        int currentWeight = 0;
        Queue<Integer> queue = new LinkedList<>();
        
        for(int i=0; i<bridge_length; i++) {
            queue.offer(0);
        }

        int index = 0;
        while(index < truck_weights.length) {
            currentWeight -= queue.poll();
            
            if(currentWeight + truck_weights[index] > weight) {
                queue.offer(0);    
            } else {
                queue.offer(truck_weights[index]);
                currentWeight+=truck_weights[index];
                index++;
            }
            answer++;
        }
        
        
        return answer + bridge_length;
    }
}