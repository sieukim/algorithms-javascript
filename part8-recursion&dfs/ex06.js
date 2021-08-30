function solution(c, arr) {
    const n = arr.length;

    let max = 0;

    const dfs = (i, weight) => {
        if (i === n) {
            if (weight > max) {
                max = weight;
            }
            return;
        }
        if (weight + arr[i] <= c) {
            dfs(i + 1, weight + arr[i]);
        }
        dfs(i + 1, weight);
    }

    dfs(0, 0);

    return max;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr)); // 242

arr = [81, 81, 81, 33, 61];
console.log(solution(259, arr)); // 256