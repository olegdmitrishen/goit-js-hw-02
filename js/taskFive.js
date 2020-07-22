'use strict';

const checkForSpam = function (message) {
	let checkMess = message.toLowerCase();
	if (checkMess.indexOf('spam') !== -1 || checkMess.indexOf('sale') !== -1) {
		return true;
	}
	return false;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
