function solution(s) {
    let answer = '';
    let count = 1;

    s.split('').forEach((value, index, str) => {
        if (str[index] === str[index + 1]) count++;
        else {
            if (count === 1) answer += value;
            else answer += value + count;
            count = 1;
        }
    })

    return answer;
}

let str = "KKHSSSSSSSE"; //K2HS7E
let str2 = "KAKHSSSSSSSE"; //KAKHS7E
console.log(solution(str));
console.log(solution(str2));