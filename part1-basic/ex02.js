function solution(a, b, c) {
    let answer = "YES", max, sum;
    max = Math.max(a, b, c);
    sum = a + b + c - max;
    if (max > sum) answer = "NO";
    return answer;
}

console.log(solution(6, 7, 11));