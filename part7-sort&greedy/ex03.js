function solution(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > 0 && arr[j + 1] < 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
let arr2 = [-1, 1, 3, -2, 2];
console.log(solution(arr)); // -3 -2 -6 1 2 3 5 6
console.log(solution(arr2)); // -1 -2 1 3 2