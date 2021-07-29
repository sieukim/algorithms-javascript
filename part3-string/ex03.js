function solution(str){
    const answer = Number.parseInt(str.replace(/[^0-9]/g, ''));
    return answer;
}

let str="g0en2T0s8eSoft";
let str2="1kflj2lkjl1lkjlj3lj0";
console.log(solution(str));
console.log(solution(str2))