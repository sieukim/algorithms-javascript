function solution(str) {
    let answer = 0;
    str.split('').forEach((value) => {
        if (value == value.toUpperCase()) answer++;
    })
    return answer;
}

console.log(solution("KoreaTimeGood"));