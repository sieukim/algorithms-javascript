function solution(times) {
    const arr = new Array(73).fill(0);

    for (const time of times) {
        const start = time[0];
        const end = time[1];
        for (let i = start; i < end; i++) {
            arr[i]++;
        }
    }

    return arr.reduce((a, b) => Math.max(a, b));
}

let arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));