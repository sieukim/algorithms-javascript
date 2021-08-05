function isAnagram(str1, str2) {
    const map = new Map();
    let answer = true;

    str1.split('').forEach((alpha) => {
        const count = map.get(alpha) ?? 0;
        map.set(alpha, count + 1);
    });
    str2.split('').forEach((alpha) => {
        const count = map.get(alpha) ?? 0;
        map.set(alpha, count - 1);
    })

    map.forEach(count => {
        if (count !== 0) answer = false;
    })

    return answer;
}

function solution(s, t) {
    let answer = 0;

    const n = t.length;
    let str = s.slice(0, n);
    let i = 0;

    s = s.split('');

    while(str.length === n) {
        if (isAnagram(str, t)) answer++;
        str = str.slice(1, n) + (s[i + n - 1] ?? '');
        i++;
    }

    return answer;
}

let s = "bacaAacba";
let t = "abc";
console.log(solution(s, t)); // 3

let s1 = "bacaAacba";
let t1 = "ab";
console.log(solution(s1, t1)); // 2

let s2 = "bacaAacba";
let t2 = "a";
console.log(solution(s2, t2)); // 4

let s3 = "bacaAacba";
let t3 = "cAba";
console.log(solution(s3, t3)); // 1
