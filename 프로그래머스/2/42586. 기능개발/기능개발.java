import java.util.*;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        List<Integer> answer = new ArrayList<>();
        Queue<Integer> progressesQueue = new LinkedList<>();
        Queue<Integer> speedsQueue = new LinkedList<>();
        
        for(int i=0; i<progresses.length; i++) {
            progressesQueue.offer(progresses[i]);
            speedsQueue.offer(speeds[i]);
        }
        
        
        while(!progressesQueue.isEmpty()){
            int count = 0;
            
            while(!progressesQueue.isEmpty() && progressesQueue.peek() >= 100){
                progressesQueue.poll();
                speedsQueue.poll();
                count++;
            }
            
            int size = progressesQueue.size();
            
            for(int i=0; i<size; i++) {
                int progress = progressesQueue.poll();
                int speed = speedsQueue.poll();
                progressesQueue.offer(progress + speed);
                speedsQueue.offer(speed);
            }
            
            
            if(count > 0) {
                answer.add(count);
            }
        }
        
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}