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

    while (start < n) {
        while (findSum(cumArr, start, end) <= m) {
            end++;
        }
        answer += end - start;
        start++;
    }
    return answer;
}

let n = 5;
let m = 5;
let arr = [1, 3, 1, 2, 3]; // 3 2 2 2 1
let arr2 = [1, 3, 1, 2, 1]; // 3 2 3 2 1
let arr3 = [1, 3, 1, 1, 3]; // 3 3 3 2 1
let arr4 = [1, 1, 1, 1]; // 4 3 2 1

console.log(solution(n, m, arr));
console.log(solution(n, m, arr2));
console.log(solution(n, m, arr3));
console.log(solution(4, 5, arr4))