function count(songs, mid) {
    let answer = 1;
    let sum = 0;

    for (const song of songs) {
        if (sum + song > mid) {
            answer++;
            sum = song;
        } else {
            sum += song;
        }
    }

    return answer;
}

function solution(m, songs) {
    let start = songs.reduce((a, b) => Math.max(a, b));
    let end = songs.reduce((a, b) => a + b, 0);
    let answer, mid;

    while (start <= end) {
        mid = parseInt((start + end) / 2);
        const dvd = count(songs, mid);
        if (dvd <= m) {
            answer = mid;
            end = mid - 1;
        } else if (dvd > m) {
            start = mid + 1;
        }
    }

    return answer;
}

let m = 3;
let songs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(m, songs));