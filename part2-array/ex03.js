function solution(n, a, b) {
    let answer = "";
    for (let i = 0; i < n; i++) {
        switch (a[i] - b[i]) {
            case 0:
                answer += 'D\n';
                break;
            case 1:
            case -2:
                answer += 'A\n';
                break;
            case -1:
            case 2:
                answer += 'B\n';
                break;
        }
    }
    return answer.trim();
}

let n = 5;
let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(n, a, b));