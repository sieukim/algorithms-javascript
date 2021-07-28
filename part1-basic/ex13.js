function solution(str) {
	let answer = "";
	for (const value of str) {
		const uppercase = value.toUpperCase();
		const lowercase = value.toLowerCase();
		if (value == uppercase) answer += lowercase;
		else if (value == lowercase) answer += uppercase;
	}
	return answer;
}

console.log(solution("StuDY"));