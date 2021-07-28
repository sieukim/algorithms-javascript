function solution(arr) {
    const sum = arr.reduce((prev, cur) => prev + cur);
    FIND:
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (sum - arr[i] - arr[j] == 100) {
                    arr[i] = 0;
                    arr[j] = 0;
                    break FIND;
                }
            }
        }
    arr = arr.filter((value) => value != 0)
    return arr;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
