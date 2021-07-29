function solution(str) {
    const originalStr = str.toUpperCase();
    const reversedStr = str.toUpperCase().split('').reverse().join('');

    if (originalStr === reversedStr) return 'YES';
    else return 'NO';
}

let str = 'goooG';
let str2 = 'asd';
let str3 = 'asdsa';
console.log(solution(str));
console.log(solution(str2));
console.log(solution(str3));