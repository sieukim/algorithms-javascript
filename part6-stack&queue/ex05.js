function solution(str) {
    let answer = 0;

    const stack = [];
    const tokens = str.replace(/\(\)/g, '|').split('');

    const cumSum = [];

    if (tokens[0] === '|') cumSum.push(1);
    else cumSum.push(0);

    for (let i = 1; i < tokens.length; i++) {
        if (tokens[i] === '|') cumSum[i] = cumSum[i - 1] + 1;
        else cumSum[i] = cumSum[i - 1];
    }

    tokens.forEach((token, index) => {
        if (token === '(') {
            stack.push([token, index]);
        }
        if (token === ')') {
            const [token, start] = stack.pop();
            const end = index;

            if (start === 0) answer += cumSum[end] + 1;
            else answer += cumSum[end] - cumSum[start] + 1;
        }
    });

    return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a)); // 17

let b = "(((()(()()))(())()))(()())";
console.log(solution(b)); // 24