function isPrime(number) {
    if (number === 1) return false;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function solution(arr) {
    const reversedArr = arr.map(number => {
        const reversedNumber = number.toString().split('').reverse().join('');
        return Number.parseInt(reversedNumber);
    })

    const primeNumberArr = reversedArr.filter(number => isPrime(number));

    return primeNumberArr;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));