import java.util.*;

class Solution {    
    public int solution(int[][] jobs) {
        PriorityQueue<int[]> pg = new PriorityQueue<>((a, b)-> a[1] - b[1]);
        
        Arrays.sort(jobs, (a, b) -> a[0] - b[0]);
        
        int jobIndex = 0;
        int currentTime = 0;
        int totalTime = 0;
        int cnt = 0;
        
        while(cnt < jobs.length) {
            while(jobIndex < jobs.length && currentTime >= jobs[jobIndex][0]) {
                pg.offer(jobs[jobIndex++]);
            }
            
            if(pg.isEmpty()){
                currentTime = jobs[jobIndex][0];
            } else {
                int[] job = pg.poll();
                totalTime += currentTime + job[1] - job[0];
                currentTime += job[1];
                cnt++;
            }
        }
        
        return totalTime / jobs.length;
    }
}