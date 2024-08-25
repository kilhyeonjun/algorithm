import java.util.Map;

class Solution {
    private static final Map<Character, Integer> OPERATIONS = Map.of(
        'w', 1,
        's', -1,
        'd', 10,
        'a', -10
    );
    
    public int solution(int n, String control) {
        return control.chars()
            .mapToObj(ch -> (char) ch)
            .map(OPERATIONS::get)
            .reduce(n, Integer::sum);
    }
}