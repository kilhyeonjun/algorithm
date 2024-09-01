import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public int[] solution(String[] genres, int[] plays) {
        Map<String, Map<Integer, Integer>> genreMap = new HashMap<>();
        
        for (int i = 0; i < genres.length; i++) {
            genreMap.computeIfAbsent(genres[i], k -> new HashMap<>()).put(i, plays[i]);
        }
        
        List<String> sortedGenres = genreMap.entrySet().stream()
            .sorted((e1, e2) -> sum(e2.getValue()).compareTo(sum(e1.getValue())))
            .map(Map.Entry::getKey)
            .collect(Collectors.toList());
        
        List<Integer> answer = new ArrayList<>();
        
        // 각 장르별로 가장 많이 재생된 노래 최대 2개 선택
        for (String genre : sortedGenres) {
            List<Integer> topSongs = genreMap.get(genre).entrySet().stream()
                .sorted((e1, e2) -> e2.getValue().compareTo(e1.getValue()))
                .limit(2)
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());
            
            answer.addAll(topSongs);
        }
        
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
    
    private Integer sum(Map<Integer, Integer> map) {
        return map.values().stream().mapToInt(Integer::intValue).sum();
    }
}