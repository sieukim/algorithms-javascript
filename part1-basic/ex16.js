function solution(str) {
    str = new Set(str);
    str = [...str].join('');
    return str;
}

console.log(solution("ksekket"));