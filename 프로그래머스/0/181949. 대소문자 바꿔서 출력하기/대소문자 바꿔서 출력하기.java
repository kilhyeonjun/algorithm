import java.util.Scanner;
import java.util.stream.Collectors;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        
        String result = a.chars()
            .mapToObj(ch -> (char) ch)
            .map(v -> Character.isUpperCase(v) 
                 ? Character.toLowerCase(v) 
                 : Character.toUpperCase(v)
                )
            .map(String::valueOf)
            .collect(Collectors.joining());
        
        System.out.println(result);
    }
}