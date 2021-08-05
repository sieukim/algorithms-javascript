function solution(str) {
    const candidates = new Map();

    str.split('').forEach(candidate => {
        const votes = candidates.get(candidate) ?? 0;
        candidates.set(candidate, votes + 1);
    })

    const elected = ['', 0];

    candidates.forEach((votes, candidate) => {
        if (votes > elected[1]) {
            elected[0] = candidate;
            elected[1] = votes;
        }
    });

    return elected[0];
}

let str = "BACBACCACCBDEDE";
let str2 = "BACBACCACCBDEDEEEEEE";
let str3 = "BACBACCACCBDEDEBAEDAA";
let str4 = "BACBACCACCBDEDEBBBADA";
console.log(solution(str)); // C
console.log(solution(str2)); // E
console.log(solution(str3)); // A
console.log(solution(str4)); // B
