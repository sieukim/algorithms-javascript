function solution(meetings) {
    meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    let answer = 0;
    let x = 0;

    for (let i = 0; i < meetings.length; i++) {
        if (x <= meetings[i][0]) {
            answer++;
            x = meetings[i][1];
        }
    }

    return answer;
}

let arr = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr)); // 3

let arr2 = [[3, 3], [1, 3], [2, 3]];
console.log(solution(arr2)); // 2

let arr3 = [[1, 4], [3, 5], [0, 6], [5, 7], [3, 8], [5, 9], [6, 10], [8, 11], [8, 12], [2, 13], [12, 14]];
console.log(solution(arr3)); // 4