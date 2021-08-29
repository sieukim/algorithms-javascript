function solution(c, arr) {
    const n = arr.length;
    const promising = new Array(n).fill(0);

    let max = 0;

    const dfs = i => {
        if (i === n) {
            let sum = 0;

            for (let i = 0; i < n; i++) {
                if (promising[i]) sum += arr[i];
            }

            if (c >= sum && sum > max) max = sum;

        } else {
            promising[i] = 0;
            dfs(i + 1);
            promising[i] = 1;
            dfs(i + 1);
        }
    };

    dfs(0);

    return max
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr)); // 242

arr = [81, 81, 81, 33, 61];
console.log(solution(259, arr)); // 256