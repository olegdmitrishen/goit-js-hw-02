'use strict';

const findLongestWord = function (string) {
	let arStr = string.split(' ');
	let wordLength = 0;
	let word;

	for (let i = 0; i < arStr.length; i += 1) {
		wordLength = arStr[1].length;

		if (arStr[i].length > wordLength) {
			word = arStr[i];
			return word;
		}
	}
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
