import java.util.stream.IntStream;

class Solution {
    public int solution(int a, int d, boolean[] included) {
        return IntStream.range(0, included.length)
            .reduce(0, (sum, i) -> sum + (included[i] ? a  + d * i : 0));
    }
}