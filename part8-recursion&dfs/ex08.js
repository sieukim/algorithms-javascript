function solution(n, m) {
    let answer = 0;

    const dfs = (index, arr) => {
        if (index === m) {
            console.log(arr);
            answer++;
            return;
        }

        for (let i = 1; i <= n; i++) {
            arr[index] = i;
            dfs(index + 1, arr);
        }
    };

    dfs(0, []);

    return answer;
}

let n = 3;
let m = 1;
console.log(solution(n, m));
/*
   ...
    3
 */

m = 2;
console.log(solution(n, m));
/*
   ...
    9
 */

m = 3;
console.log(solution(n, m));
/*
   ...
    27
 */

n = 2;
m = 3;
console.log(solution(n, m));
/*
    1 1 1
    1 1 2
    1 2 1
    1 2 2
    2 1 1
    2 1 2
    2 2 1
    2 2 2
 */