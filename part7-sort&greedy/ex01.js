function solution(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
    return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));