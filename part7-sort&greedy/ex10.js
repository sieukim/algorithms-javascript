function solution(target, arr) {
    let start = 0;
    let end = arr.length - 1;
    let mid = parseInt((start + end) / 2);

    arr.sort((a, b) => a - b);

    while (target !== arr[mid]) {
        if (target > arr[mid]) start = mid + 1;
        else end = mid - 1;
        mid = parseInt((start + end) / 2);
    }

    return mid + 1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));