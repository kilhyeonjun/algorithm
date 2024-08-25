import java.util.stream.IntStream;

class Solution {
    public int solution(int[] num_list) {
        var sum = IntStream.of(num_list).reduce(0, (a, n)-> a + n);
        var multiple = IntStream.of(num_list).reduce(1, (a, n)-> a * n);
        
        return multiple < sum*sum ? 1 : 0;
    }
}