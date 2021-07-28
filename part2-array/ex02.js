function solution(arr) {
    let answer = 0, max = 0;
    arr.forEach((value, index, arr) => {
        if (arr[index] > max) {
            max = arr[index];
            answer++;
        }
    })
    return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));