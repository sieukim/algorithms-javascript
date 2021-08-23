function solution(n) {
    let answer = "";

    const recursion = n => {
        if (n == 0) return 0;
        else {
            recursion(parseInt(n / 2));
            answer += n % 2;
        }
    };

    recursion(n);

    return answer;
}

console.log(solution(11)); // 1011
console.log(solution(16)); // 10000