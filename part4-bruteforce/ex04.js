function calc(set, max, subset = [], index = 0) {
    if (index >= set.length) {
        const sum = subset.reduce((a, b) => a + b, 0);
        if (sum <= max) return subset.length;
        else return -1;
    }
    const calc1 = calc(set, max, [...subset, set[index]], index + 1);
    const calc2 = calc(set, max, [...subset], index + 1);
    return Math.max(calc1, calc2);
}

function solution(n, m, arr) {
    const halfPrice = arr.map(value => value[0] / 2 + value[1]);
    const fullPrice = arr.map(value => value[0] + value[1]);
    const answer = [];

    for (let i = 0; i < n; i++) {
        const budget = m - halfPrice[i];
        const price = fullPrice.filter(value => value !== fullPrice[i]);
        answer.push(calc(price, budget) + 1);
    }
    return answer.reduce((a, b) => Math.max(a, b));
}

let n = 5;
let m = 28;
let arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]]; // 4
let arr2 = [[6, 6], [2, 2], [4, 3], [4, 5], [12, 3]]; // 3
console.log(solution(n, m, arr));
console.log(solution(n, m, arr2));