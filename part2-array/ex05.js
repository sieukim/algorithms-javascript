function solution(arr) {
    let rank = 1;
    let answer = [];

    while (rank <= arr.length) {
        const max = arr.reduce((a, b) => Math.max(a, b));
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (max == arr[j]) {
                answer[j] = rank;
                arr[j] = 0;
                count++;
            }
        }
        rank += count;
    }
    return answer;
}

let arr = [87, 89, 92, 100, 76, 100]; // 5 4 3 1 6 1
let arr2 = [1, 87, 87, 75, 87, 25]; // 6 1 1 4 1 5
console.log(solution(arr));
console.log(solution(arr2));