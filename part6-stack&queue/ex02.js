function solution(str) {
    const stack = [];

    str.split('').forEach(token => {
        if (token === ')') {
            while (stack.pop() !== '(');
        } else {
            stack.push(token);
        }
    })

    return stack.join('');
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));