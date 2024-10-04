import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public String solution(int[] numbers) {
        String[] strNumbers = new String[numbers.length];

        for (int i = 0; i < numbers.length; i++) {
          strNumbers[i] = String.valueOf(numbers[i]);
        }

        Arrays.sort(strNumbers, (o1, o2) -> (o2 + o1).compareTo(o1 + o2));

        String result = Arrays.stream(strNumbers).collect(Collectors.joining());
        return result.charAt(0) == '0' ? "0" : result;
    }
}