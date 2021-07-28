function solution(arr) {
    let answer = 0;
    const n = arr.length;
    const check = Array.from(Array(n + 2), () => Array(n + 2).fill(1));

    arr.forEach((value) => {
        value.unshift(0);
        value.push(0);
    })
    arr.unshift(new Array(n + 1).fill(0));
    arr.push(new Array(n + 1).fill(0));

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            let count = 0;
            if (check[i][j] == 1) {
                if (arr[i][j] > arr[i][j - 1]) {
                    check[i][j - 1] = 0;
                    count++;
                }
                if (arr[i][j] > arr[i][j + 1]) {
                    check[i][j + 1] = 0;
                    count++;
                }
                if (arr[i][j] > arr[i - 1][j]) {
                    check[i - 1][j] = 0;
                    count++;
                }
                if (arr[i][j] > arr[i + 1][j]) {
                    check[i + 1][j] = 0;
                    count++;
                }
            }
            if (count == 4) answer++;
        }
    }

    return answer;
}

let arr = [[5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]];
console.log(solution(arr));