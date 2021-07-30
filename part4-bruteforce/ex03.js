function solution(n, m, test) {
    const promising = Array.from(new Array(n + 1), () => new Array(n + 1).fill(1));
    let answer = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const mentor = test[i][j];
                const mentee = test[i][k];
                promising[mentor][mentee]++;
            }
        }
    }

    for (let i = 0; i < n + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            if (promising[i][j] === n) answer++;
        }
    }

    return answer;
}

let n = 4;
let m = 3;
let arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(n, m, arr));