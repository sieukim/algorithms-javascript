function solution(str, c) {
    return str.split(c).length - 1;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
console.log(solution("RCOMPUTERPROGRAMMING", "R"));
console.log(solution("RCOMPUTERPROGRAMMINGR", "R"));
console.log(solution("RRCOMPUTERPROGRAMMINGR", "R"));
console.log(solution("RRRCOMPUTERPROGRAMMINGR", "R"));