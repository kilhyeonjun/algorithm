class Solution {
    public String solution(String code) {
        StringBuilder ret = new StringBuilder();
        int mode = 0;
        
        for(int idx = 0; idx < code.length(); idx++) {
            var currentChar = code.charAt(idx);
            if(code.charAt(idx) != '1') {
                if(idx % 2 == mode) ret.append(code.charAt(idx));
            } else {
                mode = mode == 1 ? 0 : 1;
            }
        }
        
        return ret.length() == 0 ? "EMPTY" : ret.toString();
    }
}