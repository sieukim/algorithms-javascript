function solution(n, timeLimit, scores, times) {
    let maxScore = 0;

    const dfs = (i, totalScore, totalTime) => {
        if (i === n) {
            if (totalScore > maxScore) {
                maxScore = totalScore;
            }
            return;
        }
        if (totalTime + times[i] <= timeLimit) {
            dfs(i + 1, totalScore + scores[i], totalTime + times[i]);
        }
        dfs(i + 1, totalScore, totalTime);

    }

    dfs(0, 0, 0);

    return maxScore;
}

let n = 5;
let timeLimit = 20;
let score = [10, 25, 15, 6, 7];
let time = [5, 12, 8, 3, 4]
console.log(solution(n, timeLimit, score, time)); // 41

score = [1, 25, 15, 6, 7];
console.log(solution(n, timeLimit, score, time)); // 40