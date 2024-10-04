import java.util.*;
import java.util.stream.*;

class Solution {
    public int[] solution(int[] answers) {
        int[] user1 = {1,2,3,4,5};
        int[] user2 = {2, 1, 2, 3, 2, 4, 2, 5};
        int[] user3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
        
        int[] scores = new int[3];
        
        for(int i=0; i<answers.length; i++){
            if(answers[i] == user1[i % user1.length]) scores[0]++;
            if(answers[i] == user2[i % user2.length]) scores[1]++;
            if(answers[i] == user3[i % user3.length]) scores[2]++;
        }
        
        int maxScore = Arrays.stream(scores).max().getAsInt();
        
        return IntStream.range(1, 4)
            .filter(i->scores[i-1] == maxScore)
            .toArray();
    }
}