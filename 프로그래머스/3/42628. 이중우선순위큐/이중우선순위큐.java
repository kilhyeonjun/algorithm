import java.util.*;

class Solution {
    public int[] solution(String[] operations) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        
        for(String operation : operations) {
            String[] parts = operation.split(" ");
            String op = parts[0];
            Integer value = Integer.parseInt(parts[1]);
            
            if (op.equals("I")) {
                minHeap.offer(value);
                maxHeap.offer(value);
            } else if (op.equals("D")) {
                if(minHeap.isEmpty()) continue;
                
                if (value > 0) {
                    int max = maxHeap.poll();
                    minHeap.remove(max);
                } else if (value < 0) { 
                    int mix = minHeap.poll();
                    maxHeap.remove(mix);
                }
            }
        }
        
        
        if(minHeap.isEmpty()) {
            return new int[]{0, 0};    
        }
        
        return new int[]{maxHeap.peek(), minHeap.peek()};
    }
}