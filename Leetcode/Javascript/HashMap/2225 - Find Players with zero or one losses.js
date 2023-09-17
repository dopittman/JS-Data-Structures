/*
You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.

Example 1:

Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
Output: [[1,2,10],[4,5,7,8]]
Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].

*/

const matches = [
	[1, 3],
	[2, 3],
	[3, 6],
	[5, 6],
	[5, 7],
	[4, 5],
	[4, 8],
	[4, 9],
	[10, 4],
	[10, 9],
];

var findWinners = function (matches) {
	let losses = new Map();
	let answer = [];

	for (let i = 0; i < matches.length; ++i) {
		if (losses.has(matches[i][1]) === false) {
			losses.set(matches[i][1], 1);
		} else {
			losses.set(matches[i][1], losses.get(matches[i][1]) + 1);
		}
	}
	let zeroLosses = new Set();
	let oneLoss = new Set();

	for (let i = 0; i < matches.length; ++i) {
		if (losses.has(matches[i][0]) === false) {
			zeroLosses.add(matches[i][0]);
		}
	}

	losses.forEach((value, key) => {
		if (value === 1) {
			oneLoss.add(key);
		}
	});
	answer.push(
		Array.from(zeroLosses).sort(function (a, b) {
			return a - b;
		}),
		Array.from(oneLoss).sort(function (a, b) {
			return a - b;
		})
	);
	return answer;
};

console.log(findWinners(matches));
