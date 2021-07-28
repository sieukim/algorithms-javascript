function solution(str) {
    const answer = str
        .split('')
        .map((value) => value.toUpperCase())
        .join('');
    return answer;
}

console.log(solution('ItisTimeToStudy'));
