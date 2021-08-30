function solution(arr) {
    const n = arr.length;
    const totalSum = arr.reduce((a, b) => a + b);

    let answer = 'NO';

    const dfs = (i, sum) => {
        if (i === n) {
            if (sum * 2 === totalSum) {
                answer = 'YES';
            }
            return;
        }
        if (sum * 2 < totalSum) {
            dfs(i + 1, sum + arr[i]);
        }
        dfs(i + 1, sum);

    };

    dfs(0, 0);

    return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr)); // YES

arr = [1, 3, 4, 6, 7, 10];
console.log(solution(arr)); // NO

arr = [1, 2, 10, 30];
console.log(solution(arr)); // NO