class Solution {
    public int[] solution(int brown, int yellow) {
        int totalSquares = brown + yellow;
        
        for (int width = 3; width <= Math.sqrt(totalSquares); width++) {
            if (totalSquares % width == 0) {
                int height = totalSquares / width;
                if ((width -2) * (height - 2) == yellow) {
                    return new int[]{height, width};
                }
            }
        }
        
        return new int[]{-1,-1};
    }
}