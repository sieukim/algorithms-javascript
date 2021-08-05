function solution(str1, str2) {
    const map = new Map();
    let answer = 'YES';

    str1.split('').forEach((alpha) => {
        const count = map.get(alpha) ?? 0;
        map.set(alpha, count + 1);
    });
    str2.split('').forEach((alpha) => {
        const count = map.get(alpha) ?? 0;
        map.set(alpha, count - 1);
    })

    map.forEach(count => {
        if (count !== 0) answer = 'NO';
    })

    return answer;
}

let str1 = "AbaAeCe";
let str2 = "baeeACA";
console.log(solution(str1, str2)); // YES

let str3 = 'ABCabc';
let str4 = 'ABCAbc';
console.log(solution(str3, str4)); // No

let str5 = 'ABCabc';
let str6 = 'ABCabc';
console.log(solution(str5, str6)); // YES

let str7 = 'abaCC';
let str8 = 'Caaab';
console.log(solution(str7, str8)); // NO

