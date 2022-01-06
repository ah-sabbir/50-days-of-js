function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
    let min = rangeStart>rangeEnd?rangeEnd:rangeStart;
    let max = rangeStart<rangeEnd?rangeEnd:rangeStart;

	return Math.random() * (max - min) + min;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
