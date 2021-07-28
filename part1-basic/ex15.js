function solution(str) {
    const length = str.length - 1;
    const a = Math.floor(length / 2);
    const b = Math.ceil(length / 2);
    return str.substring(a, b + 1);
}

console.log(solution('012345'));
