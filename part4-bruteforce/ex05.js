function solution(n, k, card) {
    const answer = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const sum = card[i] + card[j] + card[k];
                answer.push(sum);
            }
        }
    }
    answer.sort((a, b) => b - a);
    answer.filter((value, index) => answer.indexOf(value) !== index);
    return answer[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));