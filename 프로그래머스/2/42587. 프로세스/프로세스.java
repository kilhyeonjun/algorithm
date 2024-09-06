import java.util.*;
import java.util.stream.*;

class Solution {
    public int solution(int[] priorities, int location) {
        Queue<Integer> queue = IntStream.range(0, priorities.length).boxed().collect(Collectors.toCollection(LinkedList::new));
         int[] sortedPriorities = Arrays.stream(priorities)
                                       .boxed()
                                       .sorted(Comparator.reverseOrder())
                                       .mapToInt(Integer::intValue)
                                       .toArray();
        
        int answer = 0;
        int index = 0;
        
        while(!queue.isEmpty()){
            int current = queue.poll();
            if (priorities[current] == sortedPriorities[index]) {
                answer++;
                index++;
                if (current == location) return answer;
            } else {
                queue.offer(current);
            }
        }
            
        return answer;
    }
}