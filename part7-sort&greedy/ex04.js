function solution(arr) {
    const n = arr.length;
    let i, j;

    for (i = 1; i < n; i++) {
        const x = arr[i];
        for (j = i - 1; j >= 0; j--) {
            if (x < arr[j]) arr[j + 1] = arr[j];
            else break;
        }
        arr[j + 1] = x;
    }

    return arr;
}

let arr = [11, 7, 5, 6, 10, 9];
let arr2 = [8, 5, 6, 2, 4];
console.log(solution(arr));
console.log(solution(arr2));