import java.util.PriorityQueue;

class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        
        PriorityQueue<Integer> pg = new PriorityQueue<>();

        for (int s : scoville) {
          pg.offer(s);
        }

        while (pg.size() >= 2 && pg.peek() < K) {

          int first = pg.poll();
          int second = pg.poll();

          int newScoville = first + (second * 2);
          pg.offer(newScoville);

          answer++;
        }
        
        if(pg.peek() < K){
            return -1;
        }
        
        return answer;
    }
}