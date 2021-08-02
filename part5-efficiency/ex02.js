function solution(arr1, arr2) {
    const length1 = arr1.length;
    const length2 = arr2.length;
    const answer = [];

    let pointer1 = 0;
    let pointer2 = 0;

    arr1.sort();
    arr2.sort();

    while (pointer1 < length1 && pointer2 < length2) {
        if (arr1[pointer1] == arr2[pointer2]) {
            answer.push(arr1[pointer1]);
            pointer1++;
            pointer2++;
        } else if (arr1[pointer1] > arr2[pointer2]) {
            pointer2++;
        } else {
            pointer1++;
        }
    }

    return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8, 9, 1];
console.log(solution(a, b));