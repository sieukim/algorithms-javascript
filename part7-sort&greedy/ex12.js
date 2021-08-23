function count(stables, d) {
    let answer = 1;
    let x = stables[0];

    for (let i = 1; i < stables.length; i++) {
        if (stables[i] - x >= d) {
            x = stables[i];
            answer++;
        }
    }

    return answer;
}

function solution(c, stables) {
    stables.sort((a, b) => a - b);

    let start = 1;
    let end = stables[stables.length - 1] - stables[0];
    let answer, mid;

    while (start <= end) {
        mid = parseInt((start + end) / 2);
        if (count(stables, mid) >= c) {
            answer = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return answer;
}

let c = 3;
let arr = [1, 2, 8, 4, 9];
console.log(solution(c, arr)); // 3