function findSum(arr, start, end) {
    if (start == 0) return arr[end];
    else return arr[end] - arr[start - 1];
}

function solution(n, m, arr) {
    const cumArr = [arr[0]];

    for (let i = 1; i < n; i++) {
        cumArr[i] = cumArr[i - 1] + arr[i];
    }

    let answer = 0;
    let start = 0;
    let end = 0;

    while (start < n && end < n) {
        const sum = findSum(cumArr, start, end);
        if (sum === m) {
            answer++;
            start++;
            end++;
        }
        if (sum < m) {
            end++;
        }
        if (sum > m) {
            start++;
        }
    }
    return answer;
}

let n = 8;
let m = 6;
let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(n, m, arr));