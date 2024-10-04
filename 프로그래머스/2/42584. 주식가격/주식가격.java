class Solution {
    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];

        for (int i = 0; i < prices.length; i++) {
          var price = prices[i];
          var time = 0;

          for (int j = i+1; j < prices.length; j++) {
            time++;
            if(price > prices[j]) {
              break;
            }
          }

          answer[i] = time;
        }
        
        return answer;
    }
}