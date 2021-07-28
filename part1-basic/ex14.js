function solution(arr) {
    arr.sort((a, b) => b.length - a.length);
    return arr[0];
}

const arr = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(arr));
