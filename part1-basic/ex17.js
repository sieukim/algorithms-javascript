function solution(arr) {
    arr = new Set([...arr]);
    return [...arr];
}

const arr = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(arr));
