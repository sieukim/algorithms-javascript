function solution(arr) {
    const answer = [];
    arr = arr.filter((value) => value % 2 == 1);
    const sum = arr.reduce((prev, curr) => prev + curr);
    const min = Math.min(...arr);
    answer.push(sum);
    answer.push(min);
    return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
