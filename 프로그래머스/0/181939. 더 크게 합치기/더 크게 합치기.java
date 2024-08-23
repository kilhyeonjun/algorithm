class Solution {
    public int solution(int a, int b) {
        return Math.max(Integer.parseInt(String.format("%s%s", a, b)), Integer.parseInt(String.format("%s%s", b, a)));
    }
}