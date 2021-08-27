function solution(n) {
    const recursion = n => {
        if (n == 0) return;
        else recursion(n - 1);
        console.log(n);
    };

    recursion(n);
}

solution(3); // 1 2 3
solution(16); // 1 2 3 ... 14 15 16