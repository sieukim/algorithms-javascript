function solution(s) {
    const originalStr = s.toUpperCase().replace(/[^A-Z]/g, '');
    const reversedStr = s.toUpperCase().replace(/[^A-Z]/g, '').split('').reverse().join('');

    if (originalStr === reversedStr) return 'YES';
    else return 'NO';
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
let str2 = "fou2nd7, time: study; Yduts; emit, 7Dnuof";
let str3 = "foau2nd7, time: study; Yduts; emit, 7Dnuof";

console.log(solution(str));  // yes
console.log(solution(str2)); // yes
console.log(solution(str3)); // no