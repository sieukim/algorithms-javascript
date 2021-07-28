function solution(n, arr) {
    let totalPoint = 0, extraPoint = 0;

    arr.forEach((value, index, arr) => {
        if (value == 1) {
            if (arr[index - 1] == 1) extraPoint++;
            else extraPoint = 0;
            totalPoint = totalPoint + 1 + extraPoint;
        }
    })

    return totalPoint;
}

let n = 10;
let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(n, arr));