'use strict';
const logItems = function (array) {
	let serialNumber = 1;
	const arrayLength = array.length;
	for (let i = 0; i < arrayLength; i += 1) {
		console.log(`[${serialNumber}] - [${array[i]}]`);
		serialNumber += 1;
	}
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
