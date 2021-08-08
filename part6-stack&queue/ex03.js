function solution(board, moves) {
    let answer = 0;
    const stack = [];

    moves.forEach(move => {
        for (let i = 0; i < board.length; i++) {
            const next = board[i][move - 1];

            if (next === 0) continue;
            if (stack.length === 0) stack.push(next);
            else {
                const prev = stack.pop();

                if (next === prev) {
                    answer += 2;
                } else {
                    stack.push(prev);
                    stack.push(next);
                }
            }
            board[i][move - 1] = 0;
            break;
        }
    });

    return answer;
}

let board = [[0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));