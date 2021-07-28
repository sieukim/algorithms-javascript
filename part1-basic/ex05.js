function solution(arr) {
    const answer = Math.min(...arr);
    return answer;
}

const arr = [1, 20, 31, -1, -34, 2, 1000];
console.log(solution(arr));
