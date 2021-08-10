function solution(n, k) {
    const princes = [];

    for (let i = 0; i < n; i++) {
        princes.push(i + 1);
    }

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < k - 1; j++) {
            const prince = princes.shift();
            princes.push(prince);
        }
        const fail = princes.shift();
    }

    return princes[0];
}

const n = 8;

for (let i = 1; i < n; i++) {
    const k = i;

    console.log(solution(n, k)); // 8 1 7 6 3 1 4
}