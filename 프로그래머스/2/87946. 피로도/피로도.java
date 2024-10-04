class Solution {
    private int maxDungeons = 0;
    
    public int solution(int k, int[][] dungeons) {
        boolean[] visited = new boolean[dungeons.length];
        explore(k, dungeons, visited, 0);
        
        return maxDungeons;
    }
    
    private void explore(int fatigue, int[][] dungeons, boolean[] visited, int count) {
        maxDungeons = Math.max(maxDungeons, count);
        
        for(int i=0; i < dungeons.length; i++) {
            int required = dungeons[i][0];
            int consume = dungeons[i][1];
            
            if(!visited[i] && fatigue >= required) {
                visited[i] = true;
                explore(fatigue - consume, dungeons, visited, count + 1);
                visited[i] = false;
            }
        }
    }
}