function solution(n) {
    const subsets = [];
    const promising = new Array(n + 1).fill(0);

    const dfs = x => {
        if (x === n + 1) {
            const subset = [];

            for (let i = 1; i < n + 1; i++) {
                if (promising[i]) subset.push(i);
            }

            if (subset.length > 0) {
                subsets.push(subset.join(' ').trim());
            }

        } else {
            promising[x] = 1;
            dfs(x + 1);
            promising[x] = 0;
            dfs(x + 1);
        }
    };

    dfs(1);

    return subsets;
}

console.log(solution(3));