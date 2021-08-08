function solution(str) {
    const stack = [];

    str.split('').forEach(value => {
        if (isNaN(value)) {
            const i = parseInt(stack.pop());
            const j = parseInt(stack.pop());
            if (value === '+') stack.push(j + i);
            if (value === '-') stack.push(j - i);
            if (value === '*') stack.push(j * i);
            if (value === '/') stack.push(j / i);
        }
        else {
            stack.push(value);
        }
    });

    return stack[0];
}

let str = "352+*9-";
console.log(solution(str));