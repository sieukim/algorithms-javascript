function solution(n, arr) {
    const sum = arr.map(value => {
        const digitArr = value.toString().split('').map(Number);
        const digitSum = digitArr.reduce((prev, cur) => prev + cur);
        return digitSum;
    })

    const maxSum = sum.reduce((prev, cur) => Math.max(prev, cur));
    let maxNumber = 0;

    sum.forEach((value, index) => {
        if (value === maxSum) {
            if (arr[index] >= maxNumber) maxNumber = arr[index];
        }
    })

    return maxNumber;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
let arr2 = [128, 460, 603, 40, 521, 137, 123, 821];
let arr3 = [128, 460, 603, 40, 521, 137, 123, 821, 281];
console.log(solution(7, arr)); // 137
console.log(solution(8, arr2)); // 821
console.log(solution(9, arr3)); // 821