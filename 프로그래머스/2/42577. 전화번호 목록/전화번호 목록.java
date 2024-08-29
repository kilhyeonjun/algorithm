import java.util.HashMap;

class Solution {
    public boolean solution(String[] phone_book) {
        HashMap<String, Integer> map = new HashMap<>();
        
        for(String phone: phone_book) map.put(phone, 1);
        
        for(String phone: phone_book) {
            for(int i=0; i<phone.length(); i++) {
                String prefix = phone.substring(0, i);
                if(map.containsKey(prefix)) return false;
            }
        }
        
        return true;
    }
}