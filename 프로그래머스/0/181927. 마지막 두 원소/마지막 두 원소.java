import java.util.stream.IntStream;

class Solution {
    public int[] solution(int[] num_list) {
        int listLength = num_list.length;
        int last = num_list[listLength-1];
        int secondLast = num_list[listLength-2];
        
        return IntStream.concat(
            IntStream.of(num_list), 
            IntStream.of(last > secondLast ? last - secondLast : last * 2)
        ).toArray();
    }
}