function solution(needStr, planStr) {
    const needArr = needStr.split('');
    const planArr = planStr.split('');
    const stack = [];

    planArr.forEach(plan => {
        const need = needArr.shift();

        if (plan === need) stack.push(need);
        else needArr.unshift(need);
    });

    if (stack.join('') === needStr) return 'YES';
    else return 'NO';
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b)); // YES

let b2 = "CGEADB";
console.log(solution(a, b2)); // NO