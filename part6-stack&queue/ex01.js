function solution(str) {
    let answer = 'YES';
    const stack = [];

    str.split('').forEach(value => {
        if (value == '(') {
            stack.push(value);
        }
        else {
            if (stack.length === 0) answer = 'NO';
            stack.pop();
        }
    });

    if (stack.length !== 0) answer = 'NO';

    return answer;
}

let str = "(()(()))(()";
console.log(solution(str)); // NO

let str2 = "((()))";
console.log(solution(str2)) // YES

let str3 = ")()()";
console.log(solution(str3)); // NO
