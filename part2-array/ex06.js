function solution(arr) {
    const n = arr.length;
    const row = new Array(n).fill(0);
    const column = new Array(n).fill(0);
    const cross = new Array(2).fill(0);

    for (let i = 0; i < n; i++) {
        cross[0] += arr[i][i];
        cross[1] += arr[n - i - 1][i];
        for (let j = 0; j < n; j++) {
            row[i] += arr[i][j];
            column[i] += arr[j][i];
        }
    }

    const answer = [...row, ...column, ...cross].reduce((a, b) => Math.max(a, b));
    return answer;


}

let arr = [[10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]];
console.log(solution(arr));