function solution(arr) {
    let answer = [];
    arr.forEach((value, index, arr) => {
        if (index == 0) answer.push(value);
        else if (arr[index] > arr[index - 1]) answer.push(value);
    })
    return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));