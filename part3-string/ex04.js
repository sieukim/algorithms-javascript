function solution(s, t) {
    const answer = [];
    const location = [];
    const str = s.split('');

    str.forEach((value, index) => {
        if (value === t) location.push(index);
    });

    str.forEach((value, index) => {
        if (value == t) answer.push(0);
        else {
            const distance = [];
            location.forEach(value => distance.push(Math.abs(value - index)));
            const minimumDistance = distance.reduce((prev, cur) => Math.min(prev, cur));
            answer.push(minimumDistance)
        }
    })
    return answer;
}

let str = "teachermode"; //10121012210
let str2 = 'teeaecheeermode' //100101100012210
console.log(solution(str, 'e'));
console.log(solution(str2, 'e'));