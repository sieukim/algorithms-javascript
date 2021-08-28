function solution(arr) {
    const n = arr.length;
    const promising = new Array(n).fill(0);
    const totalSum = arr.reduce((a, b) => a + b);

    let answer = 'NO';

    const dfs = i => {
        if (i === n) {
            let sum = 0;

            for (let i = 0; i < n; i++) {
                if (promising[i]) sum += arr[i];
            }

            if (sum * 2 === totalSum) {
                answer = 'YES';
                return;
            }

        } else {
            promising[i] = 0;
            dfs(i + 1);
            promising[i] = 1;
            dfs(i + 1);
        }
    };

    dfs(0);

    return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr)); // YES

arr = [1, 3, 4, 6, 7, 10];
console.log(solution(arr)); // NO

arr = [1, 2, 10, 30];
console.log(solution(arr)); // NO