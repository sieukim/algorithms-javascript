function solution(size, arr) {
    let answer = new Array(size).fill(0);
    const answerSize = size;
    const arrSize = arr.length;

    let i, j, tmp;

    for (i = 0; i < arrSize; i++) {
        const data = arr[i];
        const n = answer.indexOf(data);

        if (answer.includes(data)) {
            for (j = n - 1; j >= 0; j--) {
                answer[j + 1] = answer[j];
            }
            answer.shift();
        }
        answer.unshift(data);
        answer = answer.slice(0, answerSize);
        console.log(answer);
    }
}

let size = 5;
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(size, arr));