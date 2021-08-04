function solution(k, n, arr) {
    let maxSum = 0;
    let sum = arr.slice(0, k).reduce((a, b) => a + b);

    for (let i = 1; i < n; i++) {
        sum = sum - arr[i - 1] + arr[i + k - 1];
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
}

let k = 3;
let n = 10;
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
let arr2 = [12, 15, 11, 20, 25, 12, 20, 19, 13, 15];
let arr3 = [12, 15, 11, 20, 25, 12, 20, 30, 13, 15];
console.log(solution(k, n, arr)); // 56
console.log(solution(k + 1, n, arr)); // 75
console.log(solution(k, n, arr2)); // 57
console.log(solution(k, n, arr3)); // 63

