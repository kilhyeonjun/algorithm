-- 코드를 입력하세요
SELECT ANIMAL_INS.ANIMAL_ID, ANIMAL_INS.NAME
FROM ANIMAL_INS
JOIN ANIMAL_OUTS ON ANIMAL_OUTS.ANIMAL_ID = ANIMAL_INS.ANIMAL_ID
ORDER BY ANIMAL_OUTS.DATETIME - ANIMAL_INS.DATETIME DESC
LIMIT 2;